import { AbstractControl } from '@angular/forms';

export function ValidateEmail(control: AbstractControl) {
  if (!control.value.endsWith('redberry.ge')) {
    return { invalidEmail: true };
  }
  return null;
}

