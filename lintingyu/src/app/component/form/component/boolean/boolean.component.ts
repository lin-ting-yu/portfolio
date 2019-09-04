import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss']
})
export class BooleanComponent implements OnInit {
  @Input() inputId = null;
  @Input() falseText = '';
  @Input() trueText = '';
  @Input() checked = false;
  @Output() onCnange = new EventEmitter();

  constructor() { }

  handleId(){
    if (this.inputId === null) {
      this.inputId = 'bool-' + new Date().getTime();
    }
  }
  onCnangeEvent(){
    this.onCnange.emit(this.checked);
  }
  taggleChecked(){
    this.checked = !this.checked;
    this.onCnangeEvent();
  }
  ngOnInit() {
    this.handleId();
  }

}
