import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { AuthRoutingModule } from './auth.routes';
import { SharedModule } from '../shared/shared.module';

import { AuthComponent } from './auth.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [AuthComponent, SignUpComponent, SignInComponent],
  imports: [CoreModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
