import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ImgPreloaderDirective} from '@shared/directives/img-preloader/img-preloader.directive';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

const DIRECTIVES = [
  ImgPreloaderDirective
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...DIRECTIVES
  ],
  declarations: [
    ...DIRECTIVES
  ]
})
export class SharedModule {
}
