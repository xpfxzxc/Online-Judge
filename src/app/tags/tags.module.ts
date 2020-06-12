import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TagsRoutingModule } from "./tags-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TagManagementComponent } from "./tag-management/tag-management.component";
import { TagEditorComponent } from "./tag-editor/tag-editor.component";
import { TagManagementResolver } from "./tag-management/tag-management-resolver";

@NgModule({
  declarations: [TagManagementComponent, TagEditorComponent],
  imports: [CommonModule, SharedModule, TagsRoutingModule],
  providers: [TagManagementResolver]
})
export class TagsModule {}
