import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ITLayout } from '../component/img-and-text/i-t-layout.type';
import { skillDatas } from '../data/app-data-skills.const';
import { historyDatas } from '../data/app-data-history.const';
import { scrollEffect } from '../component/scroll-effect/scroll-effect-list.enum';
import { ToolFunctionService } from '../component/tool-function.service';
import { AnimationFrameService } from '../pageBase/_service/animation-frame.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // @ViewChild('book', {static: false}) book: ElementRef;
  // private bookDOMPos = null;
  public Math = Math;
  public bookMT = 0;
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
  public history = historyDatas;
  public scrollEffect = scrollEffect;

  // 控制顯示
  public aboutGreenLine = false;
  public skill = false;
  public historyMap = false;
  public child = false;
  public childGreenLine = false;

  //
  private scrolltop = 0;

  constructor(
    private toolFn: ToolFunctionService,
    private anFrame: AnimationFrameService
  ) { }

  showAboutGreenLine(){
    this.aboutGreenLine = true;
  }
  showSkill(event){
    this.skill = event;
  }
  showHistoryMap(event) {
    this.historyMap = event;
  }
  showChild(event) {
    this.child = event;
    this.childGreenLine = event;
  }
  setBookMT() {
    if (this.scrolltop === window.pageYOffset) {
      return;
    }
    this.scrolltop = window.pageYOffset;
    let allHeight = document.body.scrollHeight - window.innerHeight;
    let result = window.pageYOffset / allHeight;

    this.bookMT =  result;
  }

  ngOnInit() {
    this.showAboutGreenLine();
  }
  ngAfterViewInit() {
    this.anFrame.bindingAniamtionFrame(() => this.setBookMT());
    setTimeout(() => {
      this.anFrame.startAniamtionFrame();
    }, 0);
  }
  ngOnDestroy() {
    this.anFrame.unbindingAniamtionFrame();
  }
}
