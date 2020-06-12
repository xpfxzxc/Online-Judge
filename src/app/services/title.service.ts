import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class TitleService {
  appName = "Online Judge";

  constructor(private service: Title) {}

  setTitle(title: string) {
    this.service.setTitle(`${title} - ${this.appName}`);
  }
}
