import { Component, OnInit, Input, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-layout-common',
  templateUrl: './layout-common.component.html',
  styleUrls: ['./layout-common.component.scss']
})
export class LayoutCommonComponent implements OnInit {

  @Input() scroll = false;
  @Input() full = false;
  @ViewChild('layout', {static: false}) layout: ElementRef;
  public scrollTop = 0;

  public windowWidth: number;
  constructor() { }

  onContentScroll(){
    this.scrollTop = this.layout.nativeElement.scrollTop;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

}
