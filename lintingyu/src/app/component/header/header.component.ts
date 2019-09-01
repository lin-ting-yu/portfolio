import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public windowWidth: number;
  public mobileNavShow =  false;
  public mobileNavListShow =  false;
  @Input() scrollTop = 0;
  constructor() { }


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
