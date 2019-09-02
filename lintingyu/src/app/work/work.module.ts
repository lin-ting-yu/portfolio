import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkComponent } from './work.component';
import { ComponentModule } from '../component/component.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    ComponentModule,
    LayoutModule
  ]
})
export class WorkModule { }
