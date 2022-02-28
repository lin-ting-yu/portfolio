import { Component, OnInit, Input } from '@angular/core';
import { TextBar } from '../text-bar/text-bar.type';

@Component({
  selector: 'app-radial-char',
  templateUrl: './radial-char.component.html',
  styleUrls: ['./radial-char.component.scss']
})
export class RadialCharComponent implements OnInit {
  @Input() showInfo;
  @Input() title = 'title';
  @Input() falseText = '';
  @Input() trueText = '';
  @Input() falseDatas: Array<TextBar>;
  @Input() trueDatas: Array<TextBar>;

  public toggleShow = false;
  constructor() { }
  toggleContentShow(event){
    this.toggleShow = event;
  }
  ngOnInit() {
  }

}
