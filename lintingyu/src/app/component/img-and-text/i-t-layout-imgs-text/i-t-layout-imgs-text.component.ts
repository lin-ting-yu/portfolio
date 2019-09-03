import { Component, OnInit } from '@angular/core';
import { ITLayoutBigImgComponent } from '../i-t-layout-big-img/i-t-layout-big-img.component';

@Component({
  selector: 'app-i-t-layout-imgs-text',
  templateUrl: './i-t-layout-imgs-text.component.html',
  styleUrls: ['./i-t-layout-imgs-text.component.scss']
})
export class ITLayoutImgsTextComponent extends ITLayoutBigImgComponent {

  constructor() {
    super();
  }
}
