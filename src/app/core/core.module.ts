import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeModule} from '@modules/home/home.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


const COMPONENTS = [
  FooterComponent, HeaderComponent, LayoutComponent, NavbarComponent
];


const MODULES = [
  RouterModule,
  HttpClientModule,
  HomeModule
];


@NgModule({
  imports: [
    CommonModule,
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    ...MODULES
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
