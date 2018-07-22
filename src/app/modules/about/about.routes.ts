import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutPageComponent} from '@modules/about/containers/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent
  }
];

export const aboutRoutes: ModuleWithProviders = RouterModule.forChild(routes);
