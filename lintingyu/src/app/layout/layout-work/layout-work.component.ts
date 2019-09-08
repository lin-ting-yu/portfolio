import { Component, OnInit, Input, HostListener } from '@angular/core';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';
import { pathData } from '../../data/app-data-path.const';


@Component({
  selector: 'app-layout-work',
  templateUrl: './layout-work.component.html',
  styleUrls: ['./layout-work.component.scss']
})
export class LayoutWorkComponent implements OnInit {
  @Input() title = '';
  @Input() titleImg = '';
  @Input() listData = {};
  @Input() nextData;
  @Input() prevData;
  public goToPage = null;
  public showFirstInfo = false;
  public pathData = pathData;
  // public prevComp = pathData.workB;
  // public nextComp = pathData.workC;

  private windowWidth: number;

  constructor(
    private routerEvent: RouterEventService
  ) { }


  linkClick(goTo: string, path: string, queryParams: object) {
    this.goToPage = goTo;
    this.showFirstInfo = false;
    setTimeout(() => {
      this.goToPage = null;
      this.routerEvent.linkClick(path, queryParams, false);
      this.showFirstInfo = true;
    }, 510);
  }
  ngOnInit() {
    this.showFirstInfo = true;
  }

}
