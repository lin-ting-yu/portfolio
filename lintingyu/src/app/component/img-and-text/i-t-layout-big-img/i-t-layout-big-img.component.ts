import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-i-t-layout-big-img',
  templateUrl: './i-t-layout-big-img.component.html',
  styleUrls: ['./i-t-layout-big-img.component.scss']
})
export class ITLayoutBigImgComponent implements OnInit {
  @Input() data;

  constructor() { }

  getData(){
    if (this.data) {
      return this.data;
    }
    return {};
  }
  getTextArray(text: string){
    return text.split('\n');
  }
  ngOnInit() {
  }

}
