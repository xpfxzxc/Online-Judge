import { Component, OnInit } from "@angular/core";

import { STATUSES } from "../../statuses";

@Component({
  selector: "oj-submission-search-panel",
  templateUrl: "./submission-search-panel.component.html",
  styleUrls: ["./submission-search-panel.component.scss"]
})
export class SubmissionSearchPanelComponent implements OnInit {
  statuses = STATUSES;

  constructor() {}

  ngOnInit() {}
}
