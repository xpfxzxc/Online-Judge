import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContestComponent } from "./contest/contest.component";
import { ContestDetailComponent } from "./contest-detail/contest-detail.component";
import { ContestScoreboardComponent } from "./contest-scoreboard/contest-scoreboard.component";

const routes: Routes = [
  {
    path: "contest",
    component: ContestComponent
  },
  {
    path: "contest/:id",
    component: ContestDetailComponent
  },
  {
    path: "contest/:id/scoreboard",
    component: ContestScoreboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContestsRoutingModule {}
