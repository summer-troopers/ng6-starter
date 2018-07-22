import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertModule} from 'ngx-bootstrap/alert';

import {HomePageComponent} from './containers/home-page/home-page.component';
import {HomeAlertComponent} from './components/home-alert/home-alert.component';
import {UserItemComponent} from './components/user-item/user-item.component';
import {ProfileDetailPageComponent} from './containers/profile-detail-page/profile-detail-page.component';
import {SharedModule} from '@shared/shared.module';


const COMPONENTS = [
  HomePageComponent,
  HomeAlertComponent,
  UserItemComponent,
  ProfileDetailPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AlertModule.forRoot()
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class HomeModule {
}
