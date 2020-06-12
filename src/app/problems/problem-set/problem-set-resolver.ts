import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, EMPTY, of } from "rxjs";
import { first, mergeMap } from "rxjs/operators";

import { ProblemSetData } from "./problem-set-data.model";
import { ProblemSetGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";

@Injectable()
export class ProblemSetResolver implements Resolve<ProblemSetData[]> {
  constructor(
    private _problemSetGQL: ProblemSetGQL,
    private _alertService: AlertService,
    private _router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProblemSetData> | Promise<any> | any {
    const page = +route.queryParamMap.get("page");

    route.data = { ...route.data, page };

    if (Number.isInteger(page)) {
      return this._problemSetGQL
        .fetch({
          offset: 15 * ((page || 1) - 1),
        })
        .pipe(
          first(),
          mergeMap(({ data, errors }) => {
            if (data) {
              const problems = data.problem.map((p) => ({
                id: p.id,
                title: p.title,
                tags: p.tags.map((tag) => ({ id: tag.id, name: tag.name })),
                positiveCount: p.positive_count,
                negativeCount: p.negative_count,
                acceptedCount: p.accepted_submissions_aggregate.aggregate.count,
                submissionCount: p.submissions_aggregate.aggregate.count,
                difficulty: p.difficulty,
              }));

              return of({
                totalCount: data.problem_aggregate.aggregate.total_count,
                problems,
              });
            }

            if (errors) {
              this._alertService.error("加载题目列表失败");
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
