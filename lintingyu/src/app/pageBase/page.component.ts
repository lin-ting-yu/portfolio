import { OnInit, Output, EventEmitter } from '@angular/core';

export class PageComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onLinkClick = new EventEmitter();

  linkClick(path: string){
    this.onLinkClick.emit(path);
  }

  ngOnInit() {
  }

}
