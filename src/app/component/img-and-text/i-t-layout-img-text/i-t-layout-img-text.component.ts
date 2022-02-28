import { Component, OnInit } from '@angular/core';
import { ITLayoutBigImgComponent } from '../i-t-layout-big-img/i-t-layout-big-img.component';

@Component({
  selector: 'app-i-t-layout-img-text',
  templateUrl: './i-t-layout-img-text.component.html',
  styleUrls: ['./i-t-layout-img-text.component.scss']
})
export class ITLayoutImgTextComponent extends ITLayoutBigImgComponent {

  constructor() {
    super();
  }
}
