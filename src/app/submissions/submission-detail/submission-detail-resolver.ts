import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import { first, mergeMap } from "rxjs/operators";

import { SubmissionDetailGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { SubmissionsData } from "../submission/submissions-data.model";

@Injectable()
export class SubmissionDetailResolver implements Resolve<SubmissionsData[]> {
  constructor(
    private _submissionDetailGQL: SubmissionDetailGQL,
    private _alertService: AlertService,
    private _router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SubmissionsData> | Promise<any> | any {
    const id = route.paramMap.get("id");

    return this._submissionDetailGQL
      .fetch({
        id,
      })
      .pipe(
        first(),
        mergeMap(({ data, errors }) => {
          if (data) {
            const s = data.submission_by_pk;

            if (!s) {
              this._router.navigateByUrl("/submissions");
              return EMPTY;
            }

            return of({
              id: s.id,
              status: s.status,
              testPoints: JSON.parse(s.test_points),
              code: {
                lang: s.code.lang,
                content: s.code.content,
              },
              user: {
                id: s.user.id,
                name: s.user.name,
              },
              problem: {
                id: s.problem.id,
                title: s.problem.title,
              },
              submittedAt: s.created_at,
              score: s.score,
              timeUsage: s.time_usage,
              memoryUsage: s.memory_usage,
            });
          }

          if (errors) {
            this._alertService.error("加载评测结果失败");
            return EMPTY;
          }
        })
      );
  }
}
