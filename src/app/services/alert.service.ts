import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class AlertService {
  constructor(private toastr: ToastrService) {}

  error(msg: string) {
    this.toastr.error(msg);
  }

  success(msg: string) {
    this.toastr.success(msg);
  }

  userInputError(errors: { [key: string]: string }) {
    Object.values(errors).forEach((value) => {
      this.toastr.error(value);
    });
  }
}
