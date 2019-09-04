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
import { ITLayoutTwoBigImgComponent } from './img-and-text/i-t-layout-two-big-img/i-t-layout-two-big-img.component';
import { ITLayoutImgTextComponent } from './img-and-text/i-t-layout-img-text/i-t-layout-img-text.component';
import { ITLayoutImgsTextComponent } from './img-and-text/i-t-layout-imgs-text/i-t-layout-imgs-text.component';
import { ITLayoutTextSvgComponent } from './img-and-text/i-t-layout-text-svg/i-t-layout-text-svg.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { TextBarComponent } from './text-bar/text-bar.component';
import { RadialCharComponent } from './radial-char/radial-char.component';
import { HistoryMapComponent } from './history-map/history-map.component';


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
    ITLayoutBigImgComponent,
    ITLayoutTwoBigImgComponent,
    ITLayoutImgTextComponent,
    ITLayoutImgsTextComponent,
    ITLayoutTextSvgComponent,
    TextBarComponent,
    RadialCharComponent,
    HistoryMapComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    AngularSvgIconModule,
    HttpClientModule,
    DeviceDetectorModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListCardComponent,
    MessageComponent,
    TitleLavalFirstComponent,
    ListTextComponent,
    ITLayoutBigImgComponent,
    ITLayoutTwoBigImgComponent,
    ITLayoutImgTextComponent,
    ITLayoutImgsTextComponent,
    ITLayoutTextSvgComponent,
    RadialCharComponent
  ]
})
export class ComponentModule { }
