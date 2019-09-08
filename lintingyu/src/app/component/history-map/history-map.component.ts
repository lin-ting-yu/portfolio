import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { HistoryMapItem } from './history-map.type';
import { SvgIconComponent } from 'angular-svg-icon';
import { HistoryMapService } from './history-map.service';
import { ToolFunctionService } from '../tool-function.service';

@Component({
  selector: 'app-history-map',
  templateUrl: './history-map.component.html',
  styleUrls: ['./history-map.component.scss']
})
export class HistoryMapComponent implements OnInit {
  @ViewChild(SvgIconComponent, {static: false}) svgComp;
  @ViewChild('svgLineContent', {static: false}) svgContent;

  @Input() data: Array<HistoryMapItem>;
  @Input() svg; //svg路徑
  @Input() title = '';
  @Input() text = '';

  private pointsList: Array<any>;
  private pointsUseList: Array<any> = [];
  // 關於點的事情全部執行完
  public allRadey = false;
  // 各項位置
  public itemsPos: Array<any> = [];
  // 間距總和
  private dataGap;
  // 各點間距
  private dataGapArray;
  // 總長與資料數量比值
  private pointGapPercen;

  public windowWidth: number;
  public mobileShow = false;

  constructor(
    private HistorySv: HistoryMapService,
    private toolFn: ToolFunctionService
  ) { }

  getTextArray(text: string) {
    return text.split('\n');
  }
  // 算出資料長度
  getDataLength(data) {
    const result = this.HistorySv.getDataLength(data);
    this.dataGap = result[0];
    this.dataGapArray = result[1];
  }

  // 取得ponit
  getLinePointList(el, path, callback?, parent?) {
    this.HistorySv.getLinePointList(el, path, callback, parent);
  }
  // 算出point gap
  setPointGap(allPoint: number , dataLangth: number) {
    this.pointGapPercen = this.HistorySv.setPointGap(allPoint , dataLangth);
  }
  // 設定ponit樣式
  getEventPoint(){
    let gap = 0;
    this.data.forEach((item, i) => {
      // console.log(this.pointGapPercen);
      gap += this.dataGapArray[i];
      const point = this.pointsList[gap * this.pointGapPercen];
      this.pointsUseList.push(point);
      point.classList.add('event');
      this.setItemPos(point);
    });
    this.allRadey = true;
  }
  // 計算位置list位置
  setItemPos(point){
    let contentPos = this.svgContent.nativeElement.getBoundingClientRect();
    let pointPos = point.getBoundingClientRect();
    this.itemsPos.push([
      (pointPos.left - contentPos.left + pointPos.width  / 2) / contentPos.width,
      (pointPos.top  - contentPos.top  + pointPos.height / 2) / contentPos.height
    ]);
  }
  // 取得ponit後執行
  afterGatPoint(list) {
    this.pointsList = list;
    this.setPointGap(
      this.pointsList.length,
      this.dataGap
    );
    this.getEventPoint();
  }
  // resize動作
  @HostListener('window:resize',['$event'])
    onResize(event) {
      this.windowWidth = event.target.innerWidth;
      if (this.windowWidth > 768) {
        this.mobileShow = false;
        if (!this.allRadey) {
          this.afterViewInitFn();
        }
      }
      else{
        this.mobileShow = true;
      }
    }
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 768) {
      this.mobileShow = true;
    }
    this.getDataLength(this.data);
  }

  afterViewInitFn(){
    this.toolFn.reCheck(
      this,
      () => { return this.svgComp},
      () => {
        this.getLinePointList(
          this.svgComp.element.nativeElement,
          this.svg,
          this.afterGatPoint,
          this
        );
      }
    )
  }
  ngAfterViewInit() {
    if (!this.mobileShow) {
      this.afterViewInitFn();
    }
  }

}
