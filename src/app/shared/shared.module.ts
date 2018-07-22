import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

const MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class SharedModule {
}
