import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable, of, EMPTY } from "rxjs";
import { first, mergeMap } from "rxjs/operators";

import { Tag } from "../tag.model";
import { TagsGQL } from "src/app/generated/graphql";

@Injectable()
export class TagManagementResolver implements Resolve<Tag[]> {
  constructor(private _tagsGQL: TagsGQL) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Tag[]> | Promise<any> | any {
    return this._tagsGQL.fetch({}, {}).pipe(
      first(),
      mergeMap(({ data, errors }) => {
        if (data) {
          const tags = data.tag.map(({ __typename, ...rest }) => rest);

          return of(tags);
        }

        if (errors) {
          return EMPTY;
        }
      })
    );
  }
}
