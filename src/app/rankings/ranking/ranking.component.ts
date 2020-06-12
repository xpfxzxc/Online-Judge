import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";

import { RANKINGROWS } from "../ranking-rows";
import { TitleService } from "src/app/services/title.service";

@Component({
  selector: "oj-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.scss"]
})
export class RankingComponent implements OnInit {
  @ViewChild("paginator", { static: true }) paginator: MatPaginator;

  dataSource = new MatTableDataSource(RANKINGROWS);
  displayedColumns = [
    "ranking",
    "user-name",
    "accepted-count",
    "submission-count",
    "ac-rate"
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitle("排行榜");

    this.dataSource.paginator = this.paginator;
  }
}
