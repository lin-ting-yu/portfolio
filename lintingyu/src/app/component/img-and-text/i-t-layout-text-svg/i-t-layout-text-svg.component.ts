import { Component, OnInit, Input } from '@angular/core';
import { ITLayoutBigImgComponent } from '../i-t-layout-big-img/i-t-layout-big-img.component';

@Component({
  selector: 'app-i-t-layout-text-svg',
  templateUrl: './i-t-layout-text-svg.component.html',
  styleUrls: ['./i-t-layout-text-svg.component.scss']
})
export class ITLayoutTextSvgComponent extends ITLayoutBigImgComponent {
  @Input() pageTitle = '';

  @Input() initShowSvg = true;
  @Input() svg = true;

  constructor() {
    super();
  }

  showSvg(){
    this.svg = true;
  }
  ngOnInit() {}
}
