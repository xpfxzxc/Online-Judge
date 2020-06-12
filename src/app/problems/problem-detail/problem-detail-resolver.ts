import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import { first, mergeMap } from "rxjs/operators";

import { ProblemDetailGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { ProblemDetailData } from "./problem-detail-data.model";
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class ProblemDetailResolver implements Resolve<ProblemDetailData[]> {
  constructor(
    private _problemDetailGQL: ProblemDetailGQL,
    private _alertService: AlertService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProblemDetailData> | Promise<any> | any {
    const id = +route.paramMap.get("id");
    const userId = this._authService.loggedUser
      ? this._authService.loggedUser.id
      : 0;

    if (id >= 1) {
      return this._problemDetailGQL
        .fetch({
          id,
          user_id: userId,
        })
        .pipe(
          first(),
          mergeMap(({ data, errors }) => {
            if (data) {
              const p = data.problem_by_pk;

              if (!p) {
                this._router.navigateByUrl("/problems");
                return EMPTY;
              }

              return of({
                id: p.id,
                title: p.title,
                background: p.background,
                description: p.description,
                difficulty: p.difficulty,
                status: p.status,
                inputFormat: p.input_format,
                outputFormat: p.output_format,
                note: p.note,
                tags: p.tags.map((tag) => ({ id: tag.id, name: tag.name })),
                samples: JSON.parse(p.samples || "[]"),
                timeLimit: p.time_limit,
                memoryLimit: p.memory_limit,
                acceptedCount: p.accepted_submissions_aggregate.aggregate.count,
                submissionCount: p.submissions_aggregate.aggregate.count,
                mySubmissionCount: p.my_submissions_aggregate.aggregate.count,
                positiveCount: p.positive_count,
                negativeCount: p.negative_count,
                author: {
                  id: p.author.id,
                  name: p.author.name,
                },
              });
            }

            if (errors) {
              this._alertService.error("加载题目失败");
              return EMPTY;
            }
          })
        );
    } else {
      this._router.navigateByUrl("/problems");
      return EMPTY;
    }
  }
}
