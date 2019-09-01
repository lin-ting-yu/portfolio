import { Component } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
