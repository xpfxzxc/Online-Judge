import { Component, OnInit } from "@angular/core";
import { LoadingBarService } from "@ngx-loading-bar/core";

import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "oj-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(
    public loader: LoadingBarService,
    public authService: AuthService
  ) {}

  ngOnInit() {}
}
