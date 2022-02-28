import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkARoutingModule } from './work-a-routing.module';
import { WorkAComponent } from './work-a.component';
import { WorkModule } from '../work.module';


@NgModule({
  declarations: [WorkAComponent],
  imports: [
    CommonModule,
    WorkARoutingModule,
    WorkModule
  ]
})
export class WorkAModule { }
