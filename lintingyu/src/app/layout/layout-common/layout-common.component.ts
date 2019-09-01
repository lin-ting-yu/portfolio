import { Component, OnInit, Input, HostListener, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout-common',
  templateUrl: './layout-common.component.html',
  styleUrls: ['./layout-common.component.scss']
})
export class LayoutCommonComponent implements OnInit {

  @Input() scroll = false;
  @Input() full = false;

  public scrollTop = 0;

  public windowWidth: number;
  constructor() { }
  @HostListener('window:scroll', ['$event'])
    onContentScroll(event){
      this.scrollTop = window.pageYOffset;
    }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.windowWidth = event.target.innerWidth;
    }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.scrollTop = window.pageYOffset;
  }

}
