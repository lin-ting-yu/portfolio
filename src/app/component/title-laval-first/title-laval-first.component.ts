import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-laval-first',
  templateUrl: './title-laval-first.component.html',
  styleUrls: ['./title-laval-first.component.scss']
})
export class TitleLavalFirstComponent implements OnInit {
  @Input() text = '';
  @Input() textAlign = 0;
  @Input() jump = false;
  constructor() { }

  handleJumpDOM(){
    if (!this.jump) {
      return [this.text];
    }
    else {
      return this.text.split('');
    }

  }
  ngOnInit() {
  }

}
