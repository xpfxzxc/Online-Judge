import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { TitleService } from "../services/title.service";

@Component({
  selector: "oj-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  login = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    const url = this.route.firstChild.snapshot.url.toString();
    this._switch(url);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this._switch(url);
      }
    });
  }

  private _switch(url: string) {
    url = url.replace("/", "");

    this.login = url === "login";
    this.titleService.setTitle(this.login ? "登录" : "注册");
  }
}
