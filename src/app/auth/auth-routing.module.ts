import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginFormComponent } from "./login-form/login-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginFormComponent,
        pathMatch: "full"
      },
      {
        path: "sign-up",
        component: SignUpFormComponent,
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
