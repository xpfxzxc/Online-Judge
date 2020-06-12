import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RankingsRoutingModule } from "./rankings-routing.module";
import { RankingComponent } from "./ranking/ranking.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [RankingComponent],
  imports: [CommonModule, RankingsRoutingModule, SharedModule]
})
export class RankingsModule {}
