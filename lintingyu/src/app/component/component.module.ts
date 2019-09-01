import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCardComponent } from './list-card/list-card.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    ListCardComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    DeviceDetectorModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListCardComponent
  ]
})
export class ComponentModule { }
