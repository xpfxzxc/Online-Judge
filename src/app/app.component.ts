import { Component } from "@angular/core";
import { IconService } from "./services/icon.service";

@Component({
  selector: "oj-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "online-judge";

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.registerIcons();
  }
}
