import { Component, OnInit } from '@angular/core';
import { ITLayoutBigImgComponent } from '../i-t-layout-big-img/i-t-layout-big-img.component';

@Component({
  selector: 'app-i-t-layout-two-big-img',
  templateUrl: './i-t-layout-two-big-img.component.html',
  styleUrls: ['./i-t-layout-two-big-img.component.scss']
})
export class ITLayoutTwoBigImgComponent extends ITLayoutBigImgComponent {
  constructor() {
    super();
  }
}
