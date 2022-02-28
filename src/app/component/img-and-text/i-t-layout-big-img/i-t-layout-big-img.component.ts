import { Component, OnInit, Input } from '@angular/core';
import { WorkData } from 'src/app/data/app-data-work.const';
import { ITLayout } from '../i-t-layout.type';

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
