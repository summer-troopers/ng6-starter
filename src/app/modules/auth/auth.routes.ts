import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginPageComponent} from '@modules/auth/containers/login-page/login-page.component';
import {RegisterPageComponent} from '@modules/auth/containers/register-page/register-page.component';
import {RecoverPasswordPageComponent} from '@modules/auth/containers/recover-password-page/recover-password-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'recover-password',
    component: RecoverPasswordPageComponent
  },
];

export const authRoutes: ModuleWithProviders = RouterModule.forChild(routes);
