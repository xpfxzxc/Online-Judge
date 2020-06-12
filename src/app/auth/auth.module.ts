import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AuthComponent, LoginFormComponent, SignUpFormComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
