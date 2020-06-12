import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { LoggedUser } from "./logged-user.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _loggedUserSource = new BehaviorSubject<LoggedUser>(null);

  loggedUser$ = this._loggedUserSource.asObservable();

  constructor() {
    this._autoLogin();
  }

  get isLoggedIn$(): Observable<boolean> {
    return this._loggedUserSource.pipe(map((user) => !!user));
  }

  get loggedUser() {
    return this._loggedUserSource.value;
  }

  logout() {
    this._loggedUserSource.next(null);

    [localStorage, sessionStorage].forEach((storage) => {
      storage.removeItem(environment.authTokenKey);
      storage.removeItem(environment.userDataKey);
    });
  }

  saveUserData(data: LoggedUser, token: string, autoLogin: boolean) {
    this._loggedUserSource.next(data);

    let storage = autoLogin ? localStorage : sessionStorage;
    storage.setItem(environment.authTokenKey, token);
    storage.setItem(environment.userDataKey, JSON.stringify(data));
  }

  private _autoLogin() {
    [localStorage, sessionStorage].some((storage) => {
      const data = storage.getItem(environment.userDataKey);

      if (data) {
        this._loggedUserSource.next(JSON.parse(data));
        return true;
      }

      return false;
    });
  }
}
