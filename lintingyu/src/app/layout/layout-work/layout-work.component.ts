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

  private pathData = pathData;
  public prevComp = pathData.workB;
  public nextComp = pathData.workC;

  private windowWidth: number;

  constructor(
    private routerEvent: RouterEventService
  ) { }


  linkClick(path: string, queryParams: object) {
    this.routerEvent.linkClick(path, queryParams);
  }
  getSublingsComp(){
    let thisComp = this.routerEvent.getQueryParamse('comp');
    if (thisComp === pathData.workB){
      this.prevComp = pathData.workA;
      this.nextComp = pathData.workC;
    }
    else if (thisComp === pathData.workC) {
      this.prevComp = pathData.workA;
      this.nextComp = pathData.workB;
    }
    console.log(this.prevComp, this.nextComp);
  }
  ngOnInit() {
    this.getSublingsComp();
  }

}
