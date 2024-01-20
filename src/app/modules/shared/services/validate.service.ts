import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable, Observer, of } from 'rxjs';

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

  mimeType(
    control: AbstractControl
  ): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    if (typeof control.value === 'string') return of(null);

    const file = control.value as File;
    const fileReader = new FileReader();
    const file$ = new Observable(
      (observer: Observer<{ [key: string]: any }>) => {
        fileReader.addEventListener('loadend', () => {
          const result = <ArrayBuffer>fileReader.result;
          const arr = new Uint8Array(result).subarray(0, 4);
          let header = '';
          let isValid = false;

          for (let i = 0; i < arr.length; i++) {
            header += arr[i].toString(16);
          }

          switch (header) {
            case '89504e47':
              isValid = true;
              break;
            case 'ffd8ffe0':
            case 'ffd8ffe1':
            case 'ffd8ffe2':
            case 'ffd8ffe3':
            case 'ffd8ffe8':
              isValid = true;
              break;
            default:
              isValid = false;
              break;
          }

          if (isValid) observer.next(null);
          else observer.next({ invalidMimeType: true });

          observer.complete();
        });

        fileReader.readAsArrayBuffer(file);
      }
    );
    return file$;
  }
}
