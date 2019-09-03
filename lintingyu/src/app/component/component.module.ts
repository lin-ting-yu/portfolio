import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListCardComponent } from './list-card/list-card.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MessageComponent } from './message/message.component';
import { TitleLavalFirstComponent } from './title-laval-first/title-laval-first.component';
import { FormModule } from './form/form.module';
import { ButtonContentComponent } from './button-content/button-content.component';
import { ButtonComponent } from './button-content/button/button.component';
import { ListTextComponent } from './list-text/list-text.component';
import { ITLayoutBigImgComponent } from './img-and-text/i-t-layout-big-img/i-t-layout-big-img.component';

@NgModule({
  declarations: [
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    ListCardComponent,
    MessageComponent,
    TitleLavalFirstComponent,
    ButtonContentComponent,
    ButtonComponent,
    ListTextComponent,
    ITLayoutBigImgComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    DeviceDetectorModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListCardComponent,
    MessageComponent,
    TitleLavalFirstComponent,
    ListTextComponent
  ]
})
export class ComponentModule { }
