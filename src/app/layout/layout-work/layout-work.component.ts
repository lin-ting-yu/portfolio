import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';
import { pathData } from '../../data/app-data-path.const';
import { ToolFunctionService } from 'src/app/component/tool-function.service';


@Component({
  selector: 'app-layout-work',
  templateUrl: './layout-work.component.html',
  styleUrls: ['./layout-work.component.scss']
})
export class LayoutWorkComponent implements OnInit {
  @Input() thisData;
  @Input() nextData;
  @Input() prevData;
  @Output() onChangePage = new EventEmitter();
  public mobile = null;
  public goToPage = null;
  public showFirstInfo = false;
  public showNextAndPrevImg = false;
  public pathData = pathData;
  // public prevComp = pathData.workB;
  // public nextComp = pathData.workC;
  public windowHeight: number
  private windowWidth: number;

  constructor(
    private routerEvent: RouterEventService,
    private toolFn: ToolFunctionService
  ) { }


  linkClick(goTo: string, path: string, queryParams: object) {
    this.showNextAndPrevImg = true;
    setTimeout(() => {
      this.goToPage = goTo;
      this.showFirstInfo = false;
      this.onChangePage.emit();
    }, 10);
    setTimeout(() => {
      this.goToPage = null;
      this.routerEvent.linkClick(path, queryParams, false);
      this.showFirstInfo = true;
    }, 510);
  }
  @HostListener('window:resize',['$event'])
    onResize(event) {
      this.windowHeight = window.innerHeight;

    }
  ngOnInit() {
    this.showNextAndPrevImg = false;
    this.windowHeight = window.innerHeight;
    this.showFirstInfo = true;
    this.mobile = !this.toolFn.DETECTOR.isDesktopDevice;
  }

}
