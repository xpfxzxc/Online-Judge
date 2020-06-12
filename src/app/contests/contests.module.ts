import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";

import { ContestsRoutingModule } from "./contests-routing.module";
import { ContestComponent } from "./contest/contest.component";
import { SharedModule } from "../shared/shared.module";
import { ContestDetailComponent } from "./contest-detail/contest-detail.component";
import { ContestScoreboardComponent } from './contest-scoreboard/contest-scoreboard.component';

@NgModule({
  declarations: [ContestComponent, ContestDetailComponent, ContestScoreboardComponent],
  imports: [
    CommonModule,
    ContestsRoutingModule,
    SharedModule,
    MarkdownModule.forChild()
  ]
})
export class ContestsModule {}
