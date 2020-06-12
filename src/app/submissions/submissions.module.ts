import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";

import { SubmissionsRoutingModule } from "./submissions-routing.module";
import { SharedModule } from "../shared/shared.module";
import { SubmissionSearchPanelComponent } from "./submission/submission-search-panel/submission-search-panel.component";
import { SubmissionComponent } from "./submission/submission.component";
import { SubmissionDetailComponent } from "./submission-detail/submission-detail.component";
import { SubmissionResolver } from "./submission/submission-resolver";
import { SubmissionDetailResolver } from "./submission-detail/submission-detail-resolver";

@NgModule({
  declarations: [
    SubmissionSearchPanelComponent,
    SubmissionComponent,
    SubmissionDetailComponent,
  ],
  imports: [
    CommonModule,
    SubmissionsRoutingModule,
    SharedModule,
    MarkdownModule.forChild(),
  ],
  providers: [SubmissionResolver, SubmissionDetailResolver],
})
export class SubmissionsModule {}
