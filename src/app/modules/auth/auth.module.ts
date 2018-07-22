import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecoverPasswordPageComponent} from './containers/recover-password-page/recover-password-page.component';
import {LoginPageComponent} from './containers/login-page/login-page.component';
import {RegisterPageComponent} from './containers/register-page/register-page.component';
import {authRoutes} from '@modules/auth/auth.routes';

@NgModule({
  imports: [
    CommonModule,
    authRoutes
  ],
  declarations: [RecoverPasswordPageComponent, LoginPageComponent, RegisterPageComponent]
})
export class AuthModule {
}
