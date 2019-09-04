import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';
import { workDatas } from '../data/app-data-work.const';
import { RouterEventService } from '../pageBase/_service/router-event.service';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent extends PageComponent {
  // 所有頁面資訊
  public workDatas = workDatas;
  // 當前頁名稱
  private pageName  = '';
  private pageIndex: number;
  // 前後前頁資料
  public prevPageData = null;
  public nextPageData = null;
  // 當前頁面資訊
  public thisPageData;

  constructor(private routerEvent: RouterEventService) {
    super();
  }

  getPageName() {
    this.pageName = this.routerEvent.getQueryParamse('page');
  }
  getSublingsData() {
    if (this.pageName !== '') {
      this.prevPageData = this.pageIndex === 0 ? null : this.workDatas[this.pageIndex - 1];
      this.nextPageData = this.pageIndex === this.workDatas.length - 1 ? null : this.workDatas[this.pageIndex + 1];
    }
  }
  setPageData() {
    this.thisPageData =
      this.workDatas
        .filter((item, i) => {
          if (item.linkPath === this.pageName) {
            this.pageIndex = i;
            return true;
          }
          return false;
        })[0];
  }
  initialiseInvites() {
    this.getPageName();
    this.setPageData();
    this.getSublingsData();
  }
  ngOnInit() {
    this.initialiseInvites();
  }

}
