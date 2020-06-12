import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BreakpointObserver } from "@angular/cdk/layout";
import { takeUntil, finalize } from "rxjs/operators";
import { Subject } from "rxjs";

import { TitleService } from "src/app/services/title.service";
import { ProblemDetailData } from "./problem-detail-data.model";
import { SubmitCodeGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "oj-problem-detail",
  templateUrl: "./problem-detail.component.html",
  styleUrls: ["./problem-detail.component.scss"],
})
export class ProblemDetailComponent implements OnInit {
  areProblemTagsShowed = false;
  editorOptions = { theme: "vs", language: "cpp", minimap: { enabled: false } };
  code = ``;
  /*
  #include <iostream>
using namespace std;

int main() {
  int a, b;
  cin >> a >> b;
  cout << (a + b);
  return 0;
}*/
  submitting = false;
  problem: ProblemDetailData;
  markdown1 = "";
  markdown2 = "";
  isRightSidePanelHidden = false;

  private _unsubscribeSubject = new Subject<void>();

  constructor(
    public authService: AuthService,
    private _alertService: AlertService,
    private _titleService: TitleService,
    private _route: ActivatedRoute,
    private _breakpointObserver: BreakpointObserver,
    private _submitCodeGQL: SubmitCodeGQL,
    private _router: Router
  ) {}

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  ngOnInit() {
    this._route.data.subscribe(
      (data: { problemDetailData: ProblemDetailData }) => {
        this._titleService.setTitle(data.problemDetailData.title);
        this.problem = data.problemDetailData;
      }
    );

    this._breakpointObserver
      .observe("(max-width: 959px")
      .subscribe((result) => {
        this.isRightSidePanelHidden = result.matches;
      });

    this.initMarkdown();
  }

  submit() {
    if (this.code.length === 0) {
      return;
    }

    this.submitting = true;

    this._submitCodeGQL
      .mutate({
        problem_id: `${this.problem.id}`,
        content: this.code,
        lang: "c++",
      })
      .pipe(
        takeUntil(this._unsubscribeSubject),
        finalize(() => {
          this.submitting = false;
        })
      )
      .subscribe(({ data, errors }) => {
        if (data) {
          const submissionId = data.submit_code.submission_id;

          this._router.navigate(["/submissions", submissionId]);
        }

        if (errors) {
          this._alertService.userInputError(errors[0].extensions.invalidArgs);
        }
      });
  }

  private initMarkdown() {
    const { problem } = this;

    this.markdown1 += problem.background
      ? `## 背景\n${problem.background}\n`
      : "";
    this.markdown1 += `## 描述\n${problem.description}\n`;
    this.markdown1 += `## 输入格式\n${problem.inputFormat}\n`;
    this.markdown1 += `## 输出格式\n${problem.outputFormat}\n`;

    this.markdown2 += problem.note ? `## 提示\n${problem.note}\n` : "";
  }
}
