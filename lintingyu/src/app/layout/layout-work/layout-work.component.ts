import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-work',
  templateUrl: './layout-work.component.html',
  styleUrls: ['./layout-work.component.scss']
})
export class LayoutWorkComponent implements OnInit {
  @Input() title = '';
  @Input() titleImg = '';
  private windowWidth: number;
  public titleTextAlign = 0;
  constructor() { }

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
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.handleTitle();
  }

}
