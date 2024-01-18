import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SIGNIN_CONSTANTS } from './sign-in.constants';
import { SignInForm } from '../../Models/sign-in.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  form: FormGroup<SignInForm>;
  fb = inject(FormBuilder);

  validationMessage = SIGNIN_CONSTANTS.validationMessage;

  constructor() {
    this.initSignInForm();
  }

  onSubmit() {
    console.log(this.form.invalid);
  }

  initSignInForm() {
    this.form = this.fb.group({
      email: ['test@example.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
      remember: [false],
    });
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }
}
