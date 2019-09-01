import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutIndexComponent } from './layout-index/layout-index.component';
import { LayoutCommonComponent } from './layout-common/layout-common.component';
import { LayoutFullComponent } from './layout-full/layout-full.component';
import { ComponentModule } from '../component/component.module';

@NgModule({
  declarations: [
    LayoutIndexComponent,
    LayoutCommonComponent,
    LayoutFullComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule
  ],
  exports: [
    LayoutIndexComponent,
    LayoutCommonComponent,
    LayoutFullComponent
  ]
})
export class LayoutModule { }
