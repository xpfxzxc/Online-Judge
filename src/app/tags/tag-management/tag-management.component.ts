import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { takeUntil, finalize } from "rxjs/operators";
import { Subject } from "rxjs";

import { Tag } from "../tag.model";
import { InsertTagGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { TitleService } from "src/app/services/title.service";

@Component({
  selector: "oj-tag-management",
  templateUrl: "./tag-management.component.html",
  styleUrls: ["./tag-management.component.scss"]
})
export class TagManagementComponent implements OnInit {
  loading = false;
  newTagName = new FormControl("", [Validators.required]);
  tags: Tag[];

  private _unsubscribeSubject = new Subject<void>();

  removeTag(tagId: number) {
    this.tags = this.tags.filter(tag => tag.id !== tagId);
  }

  constructor(
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _insertTagGQL: InsertTagGQL,
    private _alertService: AlertService
  ) {}

  ngOnInit() {
    this._titleService.setTitle("标签管理");
    this._route.data.subscribe((data: { tags: Tag[] }) => {
      this.tags = data.tags;
    });
  }

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  submit() {
    if (this.newTagName.invalid) {
      return;
    }

    this.loading = true;

    this._insertTagGQL
      .mutate({
        name: this.newTagName.value
      })
      .pipe(
        takeUntil(this._unsubscribeSubject),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          const { __typename, ...newTag } = data.insert_tag.returning[0];

          this.tags.unshift(newTag);
          this.newTagName.reset();
        }

        if (errors) {
          this._alertService.error(errors[0].message);
        }
      });
  }
}
