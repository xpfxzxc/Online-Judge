import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProblemSetComponent } from "./problem-set/problem-set.component";
import { ProblemDetailComponent } from "./problem-detail/problem-detail.component";
import { ProblemEditComponent } from "./problem-edit/problem-edit.component";
import { ProblemEditResolver } from "./problem-edit/problem-edit-resolver";
import { ProblemDetailResolver } from "./problem-detail/problem-detail-resolver";
import { ProblemSetResolver } from "./problem-set/problem-set-resolver";

const routes: Routes = [
  {
    path: "problems",
    component: ProblemSetComponent,
    pathMatch: "full",
    resolve: {
      problemSetData: ProblemSetResolver,
    },
    runGuardsAndResolvers: "always",
  },
  {
    path: "problems/:id",
    component: ProblemDetailComponent,
    resolve: {
      problemDetailData: ProblemDetailResolver,
    },
    runGuardsAndResolvers: "always",
  },
  {
    path: "problems/:id/edit",
    component: ProblemEditComponent,
    resolve: {
      problemEditData: ProblemEditResolver,
    },
    runGuardsAndResolvers: "always",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemsRoutingModule {}
