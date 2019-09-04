import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends PageComponent {
  public scroll = true;

  constructor() {
    super();
  }
}
