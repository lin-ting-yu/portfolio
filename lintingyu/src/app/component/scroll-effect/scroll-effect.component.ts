import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { ToolFunctionService } from '../tool-function.service';
import { scrollEffect } from './scroll-effect-list.enum';

@Component({
  selector: 'app-scroll-effect',
  templateUrl: './scroll-effect.component.html',
  styleUrls: ['./scroll-effect.component.scss']
})
export class ScrollEffectComponent implements OnInit {
  @ViewChild('effectContent', {static: false}) effectContent: ElementRef;
  // @Input() mirror = true;
  @Input() effectType: scrollEffect = scrollEffect.fadeUp;
  @Input() activePosition = 3.5;
  @Output() onScrollShow = new EventEmitter();
  // private check = false;
  public effectList = scrollEffect;
  public scrollTop = 0;
  public showheight = null;
  public show = false;
  public toBottom = false;
  private effectContentSize = null;


  // 動畫 方法
  private requestAnimationFrame = window.requestAnimationFrame;
  private animationFrame;

  constructor(
    private toolFn: ToolFunctionService
  ) { }


  effectTypeClass() {
    if (this.effectType === this.effectList.fadeUp) {
      return 'fade-up';
    }
    else if (this.effectType === this.effectList.null) {
      return 'null';
    }
  }
  setEffectContentSize() {
    this.effectContentSize = this.effectContent.nativeElement.getBoundingClientRect();
  }
  setShowheight() {
    this.showheight = (this.effectContentSize.top + window.pageYOffset) - window.innerHeight + (window.innerHeight / this.activePosition);
  }
  watchBottom() {
    this.toBottom = document.body.scrollHeight - (window.pageYOffset + window.innerHeight) <= 20;
  }


  checkActiveHeight() {
    this.setEffectContentSize();
    this.setShowheight();
  }
  checkShow() {
    this.show = this.scrollTop >= this.showheight || this.toBottom;
  }
  handleScroll(){
    if (this.scrollTop === window.pageYOffset) {
      return;
    }
    this.scrollTop = window.pageYOffset;
    this.checkActiveHeight();
    this.watchBottom();
    this.checkShow();
    this.onScrollShow.emit(this.show);
  }
  afterGetDOM() {
    this.setEffectContentSize();
    this.setShowheight();
    this.watchBottom();
    this.aniamtionFrameInit(() => this.handleScroll());
  }

  // @HostListener('window:scroll', ['$event'])
  //   onScroll(event) {
  //     // if (this.isScroll) {
  //     //   return;
  //     // }
  //     // this.isScroll = true;
  //     // this.scrollTop = window.pageYOffset;
  //     // this.checkActiveHeight();
  //     // this.checkShow();
  //     // this.onScrollShow.emit(this.show);
  //     // this.watchBottom();
  //     // requestAnimationFrame(() => {this.isScroll = false; });
  //   }

  // @HostListener('window:resize', ['$event'])
  //   onResize(event) {
  //     this.checkActiveHeight();
  //   }
  aniamtionFrameInit(fn) {
    fn();
    this.animationFrame = this.requestAnimationFrame(() => this.aniamtionFrameInit(fn));
  }
  ngOnInit() {
    this.scrollTop = window.pageYOffset;
  }

  ngAfterViewInit(): void {
    this.toolFn.reCheck(
      this,
      () => this.effectContent,
      this.afterGetDOM
    )
  }
  // 關閉動畫
  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrame);
  }
}
