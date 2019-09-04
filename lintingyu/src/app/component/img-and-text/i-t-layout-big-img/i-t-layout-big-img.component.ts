import { Component, OnInit, Input } from '@angular/core';
import { WorkData, ITLayout } from 'src/app/data/app-data-work.const';

@Component({
  selector: 'app-i-t-layout-big-img',
  templateUrl: './i-t-layout-big-img.component.html',
  styleUrls: ['./i-t-layout-big-img.component.scss']
})
export class ITLayoutBigImgComponent implements OnInit {
  @Input() data: ITLayout;

  constructor() { }

  getTextArray(text: string) {
    return text.split('\n');
  }
  ngOnInit() {
  }

}
