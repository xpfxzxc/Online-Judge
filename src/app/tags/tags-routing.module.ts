import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TagManagementComponent } from "./tag-management/tag-management.component";
import { TagManagementResolver } from "./tag-management/tag-management-resolver";

const routes: Routes = [
  {
    path: "tags/management",
    component: TagManagementComponent,
    resolve: {
      tags: TagManagementResolver
    },
    runGuardsAndResolvers: "always"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {}
