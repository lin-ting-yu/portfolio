import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import { ComponentModule } from '../component/component.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [WorkComponent],
  imports: [
    CommonModule,
    ComponentModule,
    LayoutModule
  ],
  exports:[
    WorkComponent
  ]
})
export class WorkModule { }
