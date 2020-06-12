import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { map } from "rxjs/operators";

import { CONTEST1 } from "../contest1";
import { BreakpointObserver } from "@angular/cdk/layout";
import { TitleService } from "src/app/services/title.service";

@Component({
  selector: "oj-contest-detail",
  templateUrl: "./contest-detail.component.html",
  styleUrls: ["./contest-detail.component.scss"]
})
export class ContestDetailComponent implements OnInit {
  contest = CONTEST1;
  displayedColumns = ["submission-score", "last-submitted-at", "problem-title"];
  isRightSidePanelHidden = false;
  isRegistered = false;
  now$ = timer(0, 1000).pipe(map(() => Date.now()));

  constructor(
    private titleService: TitleService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.titleService.setTitle("比赛详情");

    this.breakpointObserver.observe("(max-width: 959px").subscribe(result => {
      this.isRightSidePanelHidden = result.matches;
    });
  }
}
