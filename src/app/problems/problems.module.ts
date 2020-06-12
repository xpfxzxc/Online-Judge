import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";

import { ProblemsRoutingModule } from "./problems-routing.module";
import { ProblemSetComponent } from "./problem-set/problem-set.component";
import { SharedModule } from "../shared/shared.module";
import { ProblemSetSearchPanelComponent } from "./problem-set/problem-set-search-panel/problem-set-search-panel.component";
import { ProblemDetailComponent } from "./problem-detail/problem-detail.component";
import { ProblemEditComponent } from "./problem-edit/problem-edit.component";
import { ProblemEditResolver } from "./problem-edit/problem-edit-resolver";
import { ProblemDetailResolver } from "./problem-detail/problem-detail-resolver";
import { ProblemSetResolver } from "./problem-set/problem-set-resolver";

@NgModule({
  declarations: [
    ProblemSetComponent,
    ProblemSetSearchPanelComponent,
    ProblemDetailComponent,
    ProblemEditComponent,
  ],
  imports: [
    CommonModule,
    ProblemsRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
  ],
  providers: [ProblemEditResolver, ProblemDetailResolver, ProblemSetResolver],
})
export class ProblemsModule {}
