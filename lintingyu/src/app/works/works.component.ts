import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent extends PageComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
