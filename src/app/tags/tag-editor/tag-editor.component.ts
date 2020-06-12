import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil, finalize } from "rxjs/operators";

import { Tag } from "../tag.model";
import { DeleteTagGQL, UpdateTagGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "oj-tag-editor",
  templateUrl: "./tag-editor.component.html",
  styleUrls: ["./tag-editor.component.scss"]
})
export class TagEditorComponent implements OnInit {
  editing = false;
  tagName: FormControl;
  loading = false;
  @Input() tag: Tag;
  @Output() deleted = new EventEmitter<number>();

  private _unsubscribeSubject = new Subject<void>();

  constructor(
    private _alertService: AlertService,
    private _deleteTagGQL: DeleteTagGQL,
    private _updateTagGQL: UpdateTagGQL
  ) {}

  edit() {
    this.editing = true;
    this.tagName = new FormControl(this.tag.name, [Validators.required]);
  }

  delete() {
    if (confirm("确定要删除吗？")) {
      this.loading = true;

      this._deleteTagGQL
        .mutate({ id: this.tag.id })
        .pipe(
          takeUntil(this._unsubscribeSubject),
          finalize(() => {
            this.loading = false;
          })
        )
        .subscribe(({ data, errors }) => {
          if (data) {
            this.deleted.next(this.tag.id);
          }

          if (errors) {
            this._alertService.error(errors[0].message);
          }
        });
    }
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  update() {
    if (this.tagName.invalid) {
      return;
    }

    this.loading = true;

    const newTagName = this.tagName.value;

    this._updateTagGQL
      .mutate({ id: this.tag.id, name: newTagName })
      .pipe(
        takeUntil(this._unsubscribeSubject),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this.editing = false;
          this.tag.name = newTagName;
        }

        if (errors) {
          this._alertService.error(errors[0].message);
        }
      });
  }
}
