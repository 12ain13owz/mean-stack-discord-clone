import { FormControl } from '@angular/forms';

export interface SignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
  remember: FormControl<boolean>;
}

export interface SignIn {
  email: string;
  password: string;
  remember: boolean;
}
