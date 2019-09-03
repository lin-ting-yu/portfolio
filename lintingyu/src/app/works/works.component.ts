import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';
import { worksData } from '../data/app-data-works.const';
@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent extends PageComponent {
  public data = worksData;
  constructor() {
    super();
  }

  ngOnInit() {
  }

}
