import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from '@modules/home/containers/home-page/home-page.component';
import {ProfileDetailPageComponent} from '@modules/home/containers/profile-detail-page/profile-detail-page.component';
import {AuthenticatedGuardService} from '@shared/guards/authenticated-guard/authenticated-guard.service';
import {HomeResolverService} from '@modules/home/resolvers/home-resolver/home-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    resolve: {
      message: HomeResolverService
    }
  },
  {
    path: 'home/profile/:id',
    component: ProfileDetailPageComponent,
    canActivate: [AuthenticatedGuardService],
    canActivateChild: [AuthenticatedGuardService],
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  }
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
