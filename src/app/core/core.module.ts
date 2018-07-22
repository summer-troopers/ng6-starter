import {APP_INITIALIZER, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './components/layout/layout.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeModule} from '@modules/home/home.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {InitService} from '@core/services/init/init.service';


const COMPONENTS = [
  FooterComponent, HeaderComponent, LayoutComponent, NavbarComponent
];


const MODULES = [
  RouterModule,
  HttpClientModule,
  HomeModule
];


export function init_app(initService: InitService) {
  return () => initService.getConfigurations();
}

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
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: init_app, deps: [InitService], multi: true},
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
