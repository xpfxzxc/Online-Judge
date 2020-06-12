import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SubmissionComponent } from "./submission/submission.component";
import { SubmissionDetailComponent } from "./submission-detail/submission-detail.component";
import { SubmissionResolver } from "./submission/submission-resolver";
import { SubmissionDetailResolver } from "./submission-detail/submission-detail-resolver";

const routes: Routes = [
  {
    path: "submissions",
    component: SubmissionComponent,
    pathMatch: "full",
    resolve: {
      submissionsData: SubmissionResolver,
    },
    runGuardsAndResolvers: "always",
  },
  {
    path: "submissions/:id",
    component: SubmissionDetailComponent,
    resolve: {
      submissionDetailData: SubmissionDetailResolver,
    },
    runGuardsAndResolvers: "always",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmissionsRoutingModule {}
