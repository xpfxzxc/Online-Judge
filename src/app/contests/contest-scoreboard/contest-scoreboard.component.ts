import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";

import { SCOREBOARD1 } from "../scoreboard1";

@Component({
  selector: "oj-contest-scoreboard",
  templateUrl: "./contest-scoreboard.component.html",
  styleUrls: ["./contest-scoreboard.component.scss"]
})
export class ContestScoreboardComponent implements OnInit {
  @ViewChild("paginator", { static: true }) paginator: MatPaginator;

  now = Date.now();
  dataSource = new MatTableDataSource(SCOREBOARD1);
  displayedColumns = ["rank", "user-name", "total-score"];
  problemColumnNames = ["1", "2", "3"];

  constructor() {
    this.displayedColumns = [
      ...this.displayedColumns,
      ...this.problemColumnNames
    ];
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
