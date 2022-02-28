import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { LayoutModule } from '../layout/layout.module';
import { ComponentModule } from '../component/component.module';


@NgModule({
  declarations: [WorksComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    LayoutModule,
    ComponentModule
  ]
})
export class WorksModule { }
