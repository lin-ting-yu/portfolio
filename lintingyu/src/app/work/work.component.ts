import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';
import { workDatas } from '../data/app-data-work.const';
import { RouterEventService } from '../pageBase/_service/router-event.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { AnimationFrameService } from '../pageBase/_service/animation-frame.service';


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

  private navigationSubscription;
  constructor(
    private routerEvent: RouterEventService,
    private router: Router,
    private anFrame: AnimationFrameService) {
    super();
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
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
    setTimeout(() => {
      this.anFrame.startAniamtionFrame();
    }, 0);
  }
  onChangePage() {
    this.anFrame.unbindingAniamtionFrame();
  }
  ngOnInit() {
    this.initialiseInvites();
  }
  ngAfterViewInit(){
    this.anFrame.startAniamtionFrame();
  }

  ngOnDestroy() {
    // avoid memory leaks here by cleaning up after ourselves. If we
    // don't then we will continue to run our initialiseInvites()
    // method on every navigationEnd event.
    this.anFrame.unbindingAniamtionFrame();
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}
