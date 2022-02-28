import { Component, OnInit, Input } from '@angular/core';
import { TextBar } from './text-bar.type';

@Component({
  selector: 'app-text-bar',
  templateUrl: './text-bar.component.html',
  styleUrls: ['./text-bar.component.scss']
})
export class TextBarComponent implements OnInit {
  @Input() data: TextBar;
  @Input() small = false;

  @Input() fill = true;
  constructor() { }

  ngOnInit() {
  }

}
