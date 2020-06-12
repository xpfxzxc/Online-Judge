import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "oj-spinner-btn",
  templateUrl: "./spinner-btn.component.html",
  styleUrls: ["./spinner-btn.component.scss"]
})
export class SpinnerBtnComponent implements OnInit {
  @Input() diameter = "24";
  @Input() loading = false;

  constructor() {}

  ngOnInit() {}
}
