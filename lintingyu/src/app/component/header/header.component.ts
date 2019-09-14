import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';
import { pathData } from '../../data/app-data-path.const';
import { ToolFunctionService } from '../tool-function.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() mobileAlwaysNavShow = false;
  public windowWidth: number;
  public mobileNavShow =  false;
  public mobileNavListShow =  false;
  public pathData = pathData;
  public activePath = '';
  public isMobile = null;
  // 判斷是否要縮小
  @Input() small = false;
  // 接收Layout scrolltop
  @Input() scrollTop = 0;
  // logo是否展開
  @Input() logoOpen = true;

  private isScroll = false;
  constructor(
    private routerEvent: RouterEventService,
    private toolFn: ToolFunctionService
  ) { }


  // 判斷顯示Mobile選單
  toggleNav() {
    if (!this.mobileNavShow) {
      this.mobileNavShow = true;
      setTimeout(() => {
        this.mobileNavListShow = true;
      }, 10);
    }
    else {
      this.closeNav();
    }
  }
  closeNav() {
    if (this.mobileNavShow) {
      this.mobileNavListShow = false;
      setTimeout(() => {
        this.mobileNavShow = false;
        this.mobileNavListShow = false;
      }, 500);
    }
  }
  linkClick(path: string){
    this.routerEvent.linkClick(path);
  }


  @HostListener('window:resize', ['$event'])
    onResize(event) {
      if (this.isScroll) {
        return;
      }
      this.isScroll = true;
      this.windowWidth = event.target.innerWidth;
      if(this.windowWidth > 768){
        if(this.mobileNavShow && this.mobileNavListShow){
          this.toggleNav();
        }
      }
      requestAnimationFrame(() => {this.isScroll = false; });
    }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.activePath = this.routerEvent.getPathName();
    this.isMobile = !this.toolFn.DETECTOR.isDesktopDevice;
    console.log(this.activePath);
  }
}
