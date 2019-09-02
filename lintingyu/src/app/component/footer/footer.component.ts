import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  // 判斷是否要縮小
  @Input() small = false;

  constructor() { }

  ngOnInit() {
  }

}
