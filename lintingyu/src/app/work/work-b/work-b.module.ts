import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkBRoutingModule } from './work-b-routing.module';
import { WorkBComponent } from './work-b.component';
import { WorkModule } from '../work.module';


@NgModule({
  declarations: [WorkBComponent],
  imports: [
    CommonModule,
    WorkBRoutingModule,
    WorkModule
  ]
})
export class WorkBModule { }
