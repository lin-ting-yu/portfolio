import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';
import { WorkData, workDatas } from './data/app-data-work.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  constructor() {
    // this.fisherYatesShuffle(workDatas);
  }
  title = 'LinTingYu';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  private fisherYatesShuffle(arr): WorkData[] {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = ~~(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
