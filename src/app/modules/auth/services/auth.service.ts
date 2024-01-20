import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { SignUp } from '../Models/sign-up.model';
import { SignIn } from '../Models/sign-in.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signup(value: SignUp) {
    return this.http.post(this.apiUrl + 'signup', value);
  }
}
