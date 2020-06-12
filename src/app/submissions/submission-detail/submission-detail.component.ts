import { Component, OnInit } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { ActivatedRoute } from "@angular/router";
import { Subject, Subscription } from "rxjs";

import * as Status from "../../utils/status";
import { TitleService } from "src/app/services/title.service";
import { SubmissionDetailData } from "./submission-detail-data.model";
import { SubmissionPartialDetailGQL } from "src/app/generated/graphql";
import { takeUntil } from "rxjs/operators";
import { AlertService } from "src/app/services/alert.service";

@Component({
  selector: "oj-submission-detail",
  templateUrl: "./submission-detail.component.html",
  styleUrls: ["./submission-detail.component.scss"],
})
export class SubmissionDetailComponent implements OnInit {
  displayedColumns = ["case", "status", "score", "time-usage", "memory-usage"];
  submission: SubmissionDetailData;
  Status = Status;
  isRightSidePanelHidden = false;

  private _unsubscribeSubject = new Subject<void>();
  private _subscription: Subscription;

  constructor(
    private _titleService: TitleService,
    private _breakpointObserver: BreakpointObserver,
    private _route: ActivatedRoute,
    private _submissionPartialDetailGQL: SubmissionPartialDetailGQL,
    private _alertService: AlertService
  ) {}

  ngOnDestroy(): void {
    this._unsubscribeSubject.next();
    this._unsubscribeSubject.complete();
  }

  ngOnInit() {
    this._titleService.setTitle("评测结果详情");

    this._route.data.subscribe(
      (data: { submissionDetailData: SubmissionDetailData }) => {
        this.submission = data.submissionDetailData;

        if (this.isWaiting(this.submission.status)) {
          this._subscription = this._submissionPartialDetailGQL
            .subscribe({
              id: this.submission.id,
            })
            .pipe(takeUntil(this._unsubscribeSubject))
            .subscribe(({ data, errors }) => {
              if (data) {
                console.log(data);
                if (!this.isWaiting(this.submission.status)) {
                  this._subscription.unsubscribe();
                }

                const s = data.submission_by_pk;
                this.submission.status = s.status;
                this.submission.testPoints = JSON.parse(s.test_points);
                this.submission.timeUsage = s.time_usage;
                this.submission.memoryUsage = s.memory_usage;
                this.submission.score = s.score;
              }

              if (errors) {
                this._subscription.unsubscribe();
                this._alertService.error("获取最新评测结果失败");
              }
            });
        }
      }
    );

    this._breakpointObserver
      .observe("(max-width: 959px")
      .subscribe((result) => {
        this.isRightSidePanelHidden = result.matches;
      });
  }

  get markdown() {
    const lang =
      this.submission.code.lang === "c++" ? "cpp" : this.submission.code.lang;
    return `\`\`\`${lang}\n${this.submission.code.content}\n\`\`\``;
  }

  private isWaiting(status: string) {
    switch (status) {
      case "Pending":
      case "Judging":
        return true;
      default:
        return false;
    }
  }
}
