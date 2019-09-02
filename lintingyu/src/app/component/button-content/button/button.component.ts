import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Output() onClick = new EventEmitter();
  constructor() { }

  click(event){
    this.onClick.emit(event);
  }
  ngOnInit() {
  }

}
