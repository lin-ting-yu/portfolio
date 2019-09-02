import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { LayoutModule } from '../layout/layout.module';
import { ComponentModule } from '../component/component.module';
import { FormModule } from '../component/form/form.module';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutModule,
    ComponentModule,
    FormModule
  ]
})
export class ContactModule { }
