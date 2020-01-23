import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// custom validator to check that two fields match
export function misMatchValidator(controlName: string, matchingControlName: string): ValidatorFn {
    return (formGroup: FormGroup): ValidationErrors | null => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        return (control.value !== matchingControl.value)
          ? { misMatch: true }
          : null;
    };
}
