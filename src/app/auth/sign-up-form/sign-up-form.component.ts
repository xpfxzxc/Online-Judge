import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil, finalize } from "rxjs/operators";

import { passwordConfirmationValidator } from "./password-confirmation.validator";
import { SignUpGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: "oj-sign-up-form",
  templateUrl: "./sign-up-form.component.html",
  styleUrls: ["./sign-up-form.component.scss"]
})
export class SignUpFormComponent implements OnInit {
  loading = false;
  signUpForm = this._fb.group(
    {
      name: ["", [Validators.required, Validators.pattern(/^\b.{2,25}\b$/)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern(emailRegex)]]
    },
    {
      validators: [passwordConfirmationValidator]
    }
  );

  private _unsubscribeSubject = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _signUpGQL: SignUpGQL,
    private _router: Router,
    private _alertService: AlertService
  ) {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  submit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const { passwordConfirmation, ...input } = this.signUpForm.value;
    this._signUpGQL
      .mutate(input)
      .pipe(
        takeUntil(this._unsubscribeSubject),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          this._router.navigateByUrl("/login");
        }

        if (errors) {
          this._alertService.userInputError(errors[0].extensions.invalidArgs);
        }
      });
  }
}
