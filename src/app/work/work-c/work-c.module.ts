import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkCRoutingModule } from './work-c-routing.module';
import { WorkCComponent } from './work-c.component';
import { WorkModule } from '../work.module';


@NgModule({
  declarations: [WorkCComponent],
  imports: [
    CommonModule,
    WorkCRoutingModule,
    WorkModule
  ]
})
export class WorkCModule { }
