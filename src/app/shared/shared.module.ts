import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ImgPreloaderDirective} from '@shared/directives/img-preloader/img-preloader.directive';
import {ReverseStrPipe} from './pipes/reverse-str/reverse-str.pipe';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

const DIRECTIVES = [
  ImgPreloaderDirective
];

const PIPES = [
  ReverseStrPipe
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...DIRECTIVES,
    ...PIPES
  ],
  declarations: [
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {
}
