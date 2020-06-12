import { FormGroup, ValidatorFn, ValidationErrors } from "@angular/forms";

export const passwordConfirmationValidator: ValidatorFn = (
  group: FormGroup
): ValidationErrors | null => {
  const password = group.get("password");
  const passwordConfirmation = group.get("passwordConfirmation");

  if (
    !passwordConfirmation.errors &&
    password.value !== passwordConfirmation.value
  ) {
    passwordConfirmation.setErrors({ passwordConfirmation: true });
  }

  return null;
};
