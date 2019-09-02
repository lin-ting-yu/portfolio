import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCommonComponent } from './layout-common/layout-common.component';
import { ComponentModule } from '../component/component.module';
import { LayoutWorkComponent } from './layout-work/layout-work.component';

@NgModule({
  declarations: [
    LayoutCommonComponent,
    LayoutWorkComponent
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    LayoutCommonComponent,
    LayoutWorkComponent
  ]
})
export class LayoutModule { }
