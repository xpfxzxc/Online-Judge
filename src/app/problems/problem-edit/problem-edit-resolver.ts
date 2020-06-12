import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import { first, mergeMap } from "rxjs/operators";

import { TagsGQL, ProblemEditDataGQL } from "src/app/generated/graphql";
import { AlertService } from "src/app/services/alert.service";
import { ProblemEditData } from "./problem-edit-data.model";

@Injectable()
export class ProblemEditResolver implements Resolve<ProblemEditData[]> {
  constructor(
    private _tagsGQL: TagsGQL,
    private _problemEditDataGQL: ProblemEditDataGQL,
    private _alertService: AlertService,
    private _router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProblemEditData> | Promise<any> | any {
    const id = +route.paramMap.get("id");

    if (id === 0) {
      return this._tagsGQL.fetch({}, {}).pipe(
        first(),
        mergeMap(({ data, errors }) => {
          if (data) {
            const tags = data.tag.map(({ __typename, ...rest }) => rest);

            return of({
              problem: {
                id: 0,
                title: "",
                background: "",
                description: "",
                difficulty: 3,
                status: "private",
                inputFormat: "",
                outputFormat: "",
                note: "",
                tags: [],
                samples: "[]",
              },
              tags,
            });
          }

          if (errors) {
            this._alertService.error("加载标签失败");
            return EMPTY;
          }
        })
      );
    } else if (id > 0) {
      return this._problemEditDataGQL
        .fetch({
          id,
        })
        .pipe(
          first(),
          mergeMap(({ data, errors }) => {
            if (data) {
              const tags = data.tag.map(({ __typename, ...rest }) => rest);
              const p = data.problem_by_pk;

              if (!p) {
                this._router.navigateByUrl("/problems");
                return EMPTY;
              }

              return of({
                problem: {
                  id: p.id,
                  title: p.title,
                  background: p.background || "",
                  description: p.description,
                  difficulty: p.difficulty,
                  status: p.status,
                  inputFormat: p.input_format,
                  outputFormat: p.output_format,
                  timeLimit: p.time_limit,
                  memoryLimit: p.memory_limit,
                  note: p.note || "",
                  tags: p.tags.map((tag) => ({ id: tag.id, name: tag.name })),
                  samples: p.samples || "[]",
                },
                tags,
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
