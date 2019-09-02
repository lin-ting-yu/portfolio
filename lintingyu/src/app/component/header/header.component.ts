import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public windowWidth: number;
  public mobileNavShow =  false;
  public mobileNavListShow =  false;

  // 判斷是否要縮小
  @Input() small = false;
  // 接收Layout scrolltop
  @Input() scrollTop = 0;
  // logo是否展開
  @Input() logoOpen = true;

  constructor(
    private router: Router,
    route: ActivatedRoute,
    locationStrategy: LocationStrategy
  ) { }


  // 判斷顯示Mobile選單
  toggleNav() {
    if (!this.mobileNavShow) {
      this.mobileNavShow = !this.mobileNavShow;
      setTimeout(() => {
        this.mobileNavListShow = !this.mobileNavListShow;
      }, 10);
    }
    else {
      this.mobileNavListShow = !this.mobileNavListShow;
      setTimeout(() => {
        this.mobileNavShow = !this.mobileNavShow;
      }, 500);
    }
  }

  linkClick(path: string){
    this.router.navigate([path]);
  }


  @HostListener('window:resize',['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
    if(this.windowWidth > 768){
      if(this.mobileNavShow && this.mobileNavListShow){
        this.toggleNav();
      }
    }
  }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

}
