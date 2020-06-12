import { Component, OnInit, Input } from "@angular/core";

import { TAGS } from "../../tags";

@Component({
  selector: "oj-problem-set-search-panel",
  templateUrl: "./problem-set-search-panel.component.html",
  styleUrls: ["./problem-set-search-panel.component.scss"],
})
export class ProblemSetSearchPanelComponent implements OnInit {
  @Input() resultsCount: number;
  tags = TAGS;
  isSearchPanelCollapsed = true;

  constructor() {}

  ngOnInit() {}

  toggleSearchPanel() {
    this.isSearchPanelCollapsed = !this.isSearchPanelCollapsed;
  }
}
