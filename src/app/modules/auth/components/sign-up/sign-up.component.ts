import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SIGNUP_CONSTANTS } from './sign-up.constants';
import { ValidateService } from '../../../shared/services/validate.service';
import { SignUp, SignUpForm } from '../../Models/sign-up.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  form: FormGroup<SignUpForm>;
  fb = inject(FormBuilder);
  validate = inject(ValidateService);
  authService = inject(AuthService);

  validationMessage = SIGNUP_CONSTANTS.validationMessage;
  patternPassword = SIGNUP_CONSTANTS.patternPassword;

  inputDefault = this.validate.getInputClass.default;
  inputError = this.validate.getInputClass.error;

  constructor() {
    this.initSignUpForm();
  }

  onSubmit() {
    if (this.form.invalid) return;
    const signupData: SignUp = this.form.getRawValue();

    this.authService.signup(signupData).subscribe((response) => {
      console.log(response);
    });
  }

  initSignUpForm() {
    this.patternPassword = '';

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.pattern(this.patternPassword)],
      ],
      confirmPassword: [
        '',
        [Validators.required, this.validate.comparePassword('password')],
      ],
    });
  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  get confirmPassword() {
    return this.form.controls['confirmPassword'];
  }
}
