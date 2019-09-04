import { Component, OnInit, Input } from '@angular/core';
import { ITLayout } from '../component/img-and-text/i-t-layout.type';
import { skillDatas } from '../data/app-data-skills.const';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() initShowGreenLine = true;
  public greenLine = false;
  public firstSectionData = new ITLayout(
    { layout: 'imgsAndText',
      layoutType: 1,
      imgs: [
        'assets/about/about-face.svg'
      ],
      title: 'PROFILE',
      text: '台灣人喜歡設計、網頁特效、數學、手工以及貓咪。平常有在騎自行車，期望未來能在專業上有所突破，以及騎自行車不會爆胎！'
    });
  public firstSectionData2 = new ITLayout(
    { layout: 'imgsAndText',
      layoutType: 1,
      imgs: [
        'assets/about/child-face.svg'
      ],
      title: 'ONE TEAR OLD',
      text: '這是我小時候大概 1歲，記得當時在用雷射眼攻擊蚊子，我覺得很可愛，所以放上來跟大家分享。'
    });
  public skillDatas = skillDatas;
  constructor() { }

  showGreenLine(){
    this.greenLine = true;
  }
  ngOnInit() {
    if (this.initShowGreenLine) {
      this.showGreenLine();
    }
  }

}
