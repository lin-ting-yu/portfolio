import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends PageComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
