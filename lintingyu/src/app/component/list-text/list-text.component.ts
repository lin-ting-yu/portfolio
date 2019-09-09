import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-text',
  templateUrl: './list-text.component.html',
  styleUrls: ['./list-text.component.scss']
})
export class ListTextComponent implements OnInit {
  @Input() data = {};
  public Object = Object;
  constructor() { }

  ngOnInit() {
  }

}
