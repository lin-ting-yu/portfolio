import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';


@Component({
  selector: 'app-layout-work',
  templateUrl: './layout-work.component.html',
  styleUrls: ['./layout-work.component.scss']
})
export class LayoutWorkComponent implements OnInit {
  @Input() title = '';
  @Input() titleImg = '';
  @Input() listData = {};
  @Input() nextData;
  @Input() prevData;
  private windowWidth: number;
  public titleTextAlign = 0;
  constructor(
    private routerEvent: RouterEventService
  ) { }

  @HostListener('window:resize', ['$event'])
    onResize(event){
      this.windowWidth = event.target.innerWidth;
      this.handleTitle();
    }
  handleTitle(){
    if (this.windowWidth < 769){
      this.titleTextAlign = 1;
    }
    else{
      this.titleTextAlign = 0;
    }
  }
  linkClick(path: string, page: string) {
    this.routerEvent.linkClick(path, page)
  }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.handleTitle();
  }

}
