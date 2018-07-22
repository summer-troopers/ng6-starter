import { NgModule } from '@angular/core';
import { ContactPageComponent } from './containers/contact-page/contact-page.component';
import {contactRoutes} from '@modules/contact/contact.routes';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    contactRoutes
  ],
  declarations: [ContactPageComponent]
})
export class ContactModule { }
