import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable, EMPTY, of } from "rxjs";
import { first, mergeMap } from "rxjs/operators";

import { AlertService } from "src/app/services/alert.service";
import { SubmissionsData } from "./submissions-data.model";
import { SubmissionsGQL } from "src/app/generated/graphql";

@Injectable()
export class SubmissionResolver implements Resolve<SubmissionsData[]> {
  constructor(
    private _submissionsGQL: SubmissionsGQL,
    private _alertService: AlertService,
    private _router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SubmissionsData> | Promise<any> | any {
    const page = +route.queryParamMap.get("page");

    route.data = { ...route.data, page };

    if (Number.isInteger(page)) {
      return this._submissionsGQL
        .fetch({
          offset: 10 * ((page || 1) - 1),
        })
        .pipe(
          first(),
          mergeMap(({ data, errors }) => {
            if (data) {
              const submissions = data.submission.map((s) => ({
                id: s.id,
                problem: {
                  id: s.problem.id,
                  title: s.problem.title,
                },
                user: {
                  id: s.user.id,
                  name: s.user.name,
                },
                status: s.status,
                score: s.score,
                timeUsage: s.time_usage,
                memoryUsage: s.memory_usage,
                lang: s.code.lang,
                submittedAt: s.created_at,
              }));

              return of({
                totalCount: data.submission_aggregate.aggregate.total_count,
                submissions,
              });
            }

            if (errors) {
              this._alertService.error("加载评测结果列表失败");
              return EMPTY;
            }
          })
        );
    } else {
      this._router.navigateByUrl("/submissions");
      return EMPTY;
    }
  }
}
