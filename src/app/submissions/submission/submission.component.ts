import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

import { TitleService } from "src/app/services/title.service";
import * as Status from "../../utils/status";
import { SubmissionsData } from "./submissions-data.model";

@Component({
  selector: "oj-submission",
  templateUrl: "./submission.component.html",
  styleUrls: ["./submission.component.scss"],
})
export class SubmissionComponent implements OnInit {
  @ViewChild("paginator", { static: true }) paginator: MatPaginator;

  data: any;
  displayedColumns = [
    "problem-id",
    "problem-title",
    "submitted-by",
    "status",
    "score",
    "time-usage",
    "memory-usage",
    "lang",
    "submitted-at",
  ];
  pageIndex: number;
  Status = Status;
  totalCount: number;

  constructor(
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._titleService.setTitle("评测结果");

    this._route.data.subscribe(
      (data: { page: number; submissionsData: SubmissionsData }) => {
        this.data = data.submissionsData.submissions;
        this.pageIndex = data.page - 1;
        this.totalCount = data.submissionsData.totalCount;
      }
    );

    this.paginator.page.subscribe(() => {
      this._router.navigate([], {
        queryParams: { page: this.paginator.pageIndex + 1 },
      });
    });
  }
}
