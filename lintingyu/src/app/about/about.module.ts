import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { LayoutModule } from '../layout/layout.module';
import { ComponentModule } from '../component/component.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LayoutModule,
    ComponentModule
  ]
})
export class AboutModule { }
