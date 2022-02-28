import { OnInit, Output, EventEmitter, Component } from '@angular/core';


@Component({
  template: ''
})
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
