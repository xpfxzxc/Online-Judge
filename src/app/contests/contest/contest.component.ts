import { Component, OnInit } from "@angular/core";
import { timer } from "rxjs";
import { map } from "rxjs/operators";

import { CONTESTS } from "../contest";
import { TitleService } from "src/app/services/title.service";

@Component({
  selector: "oj-contest",
  templateUrl: "./contest.component.html",
  styleUrls: ["./contest.component.scss"]
})
export class ContestComponent implements OnInit {
  contests = CONTESTS;
  now$ = timer(0, 1000).pipe(map(() => Date.now()));
  hasRegistered = false;

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitle("比赛");
  }
}
