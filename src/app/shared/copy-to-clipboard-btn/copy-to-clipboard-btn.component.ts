import { Component, OnInit, Input } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "oj-copy-to-clipboard-btn",
  templateUrl: "./copy-to-clipboard-btn.component.html",
  styleUrls: ["./copy-to-clipboard-btn.component.scss"]
})
export class CopyToClipboardBtnComponent implements OnInit {
  @Input() content: string;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {}

  onCopied() {
    this.snackBar.open("复制成功", "", { duration: 1000 });
  }
}
