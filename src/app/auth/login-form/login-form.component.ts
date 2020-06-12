import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil, finalize } from "rxjs/operators";

import { LoginGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "../auth.service";

@Component({
  selector: "oj-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"]
})
export class LoginFormComponent implements OnInit {
  autoLogin = true;
  loginForm = this._fb.group({
    name: ["", Validators.required],
    password: ["", Validators.required]
  });
  loading = false;

  private _unsubscribeSubject = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _loginGQL: LoginGQL,
    private _alertService: AlertService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this._loginGQL
      .mutate({
        ...this.loginForm.value
      })
      .pipe(
        takeUntil(this._unsubscribeSubject),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this._authService.saveUserData(
            data.login.user,
            data.login.token,
            this.autoLogin
          );

          this._router.navigateByUrl("/");
        }

        if (errors) {
          this._alertService.error(errors[0].message as string);
        }
      });
  }
}
