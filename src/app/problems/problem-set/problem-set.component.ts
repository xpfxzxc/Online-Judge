import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";

import { TitleService } from "src/app/services/title.service";
import { ProblemSetData } from "./problem-set-data.model";

@Component({
  selector: "oj-problem-set",
  templateUrl: "./problem-set.component.html",
  styleUrls: ["./problem-set.component.scss"],
})
export class ProblemSetComponent implements OnInit {
  @ViewChild("paginator", { static: true }) paginator: MatPaginator;

  data: any;
  displayedColumns = [
    "completion",
    "id",
    "title",
    "positive-count",
    "submission-count",
    "acRate",
    "difficulty",
  ];
  areProblemTagsShowed = true;
  pageIndex: number;
  totalCount: number;

  constructor(
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._titleService.setTitle("题库");

    this._route.data.subscribe(
      (data: { page: number; problemSetData: ProblemSetData }) => {
        this.data = data.problemSetData.problems;
        this.pageIndex = data.page - 1;
        this.totalCount = data.problemSetData.totalCount;
      }
    );

    this.paginator.page.subscribe(() => {
      this._router.navigate([], {
        queryParams: { page: this.paginator.pageIndex + 1 },
      });
    });
  }
}
