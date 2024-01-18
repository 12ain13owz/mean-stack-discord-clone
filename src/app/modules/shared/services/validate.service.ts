import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  private inputClass = {
    default:
      'bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500',
    error:
      'bg-red-50 border-red-500 text-red-900 placeholder-red-700 text-sm focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500',
  };

  // comparePassword(password: string) {
  //   return (confirmPassword: FormControl) => {
  //     console.log(confirmPassword.value);
  //   };
  // }

  get getInputClass() {
    return this.inputClass;
  }
  comparePassword(passwordField: string): any {
    return (confirmPassword: AbstractControl) => {
      if (!confirmPassword.parent) return false;
      const password = confirmPassword.parent.get(passwordField);
      const passwordSubscripe = password.valueChanges.subscribe(() => {
        confirmPassword.updateValueAndValidity();
        passwordSubscripe.unsubscribe();
      });

      if (confirmPassword.value === password.value) return false;
      return { compare: true };
    };
  }
}
