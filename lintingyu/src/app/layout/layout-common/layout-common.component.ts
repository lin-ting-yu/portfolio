import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-common',
  templateUrl: './layout-common.component.html',
  styleUrls: ['./layout-common.component.scss']
})
export class LayoutCommonComponent implements OnInit {

  @Input() scroll = false;
  @Input() full = false;

  //控制content是否要padding
  @Input() padding = true;
  private isScroll = false;
  public contentShowFull = false;
  public scrollTop = 0;

  public windowWidth: number;
  public windowHeight: number;
  constructor() { }

  @HostListener('window:scroll', ['$event'])
    onContentScroll(event){
      if (this.isScroll) {
        return;
      }
      this.isScroll = true;
      this.scrollTop = window.pageYOffset;
      this.contentShowFull = this.scroll && this.full && this.scrollTop / this.windowHeight > 1 / 6;
      requestAnimationFrame(() => {this.isScroll = false; });
    }

  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.windowWidth  = event.target.innerWidth;
      this.windowHeight = event.target.innerHeight;
    }

  ngOnInit() {
    this.windowWidth  = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.scrollTop = window.pageYOffset;
    this.contentShowFull = this.scroll && this.full && this.scrollTop / this.windowHeight > 1 / 6
  }

}
