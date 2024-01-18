import { FormControl } from '@angular/forms';

export interface SignUpForm {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

export interface SignUp {
  email: string;
  password: string;
}
