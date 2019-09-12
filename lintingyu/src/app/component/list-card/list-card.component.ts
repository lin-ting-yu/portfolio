import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ListCardService } from './list-card.service';
import { ToolFunctionService } from '../tool-function.service';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';
import { pathData } from '../../data/app-data-path.const';
import { WorkData } from 'src/app/data/app-data-work.const';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})


export class ListCardComponent implements OnInit {

  @Input() data: Array<WorkData>;
  @ViewChild('listCardUl', {static: false}) listCardUl: ElementRef;
  private targetPos = this.listCardService.targetPos;
  private transformNumber = null;
  private anmation = null;
  private target = null;
  public pathData = pathData;
  public onCardClickId = null;
  private imgTrans = null;
  constructor(
    private listCardService: ListCardService,
    private toolFunction: ToolFunctionService,
    private routerEvent: RouterEventService
  ) { }

  startSetPos(event){
    if (!this.onCardClickId && this.onCardClickId !== 0) {
      if (!this.toolFunction.DETECTOR.isDesktopDevice) {
        return;
      }
      this.listCardService.getTargetPos(event);
      this.setTarget(event.target);
      this.setDOMTransform(event);
    }
  }
  stopSetPos(){
    if (!this.toolFunction.DETECTOR.isDesktopDevice) {
      return;
    }
    this.listCardService.reset();
    this.transformNumber = null;
    if(this.anmation){
      clearInterval(this.anmation);
      this.anmation = null;
    }
    if(this.target){
      this.target.img.style.transform  = '';
      this.target.text.style.transform = '';
      this.target.bor.style.transform  = '';
      this.target = null;
    }

  }
  getTransformNumber(event){
    if (!this.toolFunction.DETECTOR.isDesktopDevice) {
      return;
    }
    this.transformNumber = this.listCardService.getTransformNumber(event);
  }
  setTarget(event){
    this.target = {
      target: event,
      img:    event.querySelector('.img-content'),
      bor:    event.querySelector('.img-border'),
      text:   event.querySelector('.info-text-content')
    }
  }
  setDOMTransform(event){
    if (event){
      this.anmation = setInterval(() => {
        if (this.transformNumber){
          let speed = 0.2;
          let imgTrans  = this.imgTrans = this.toolFunction.getTransform(this.target.img);
          let borTrans  = this.toolFunction.getTransform(this.target.bor);
          let textTrans = this.toolFunction.getTransform(this.target.text);

          let imgNewTrans =
            `rotateX(${
              imgTrans.rotateX + (this.transformNumber.rotateX * 2 - imgTrans.rotateX) * speed
            }deg) rotateY(${
              imgTrans.rotateY + (this.transformNumber.rotateY * 2 - imgTrans.rotateY) * speed
            }deg)`;

          let borNewTrans =
            `rotateX(${
              borTrans.rotateX + (this.transformNumber.rotateX * 1.5 - borTrans.rotateX) * speed
            }deg) rotateY(${
              borTrans.rotateY + (this.transformNumber.rotateY * 1.5 - borTrans.rotateY) * speed
            }deg)`;

          let textNewTrans =
            `rotateX(${
              textTrans.rotateX + (this.transformNumber.rotateX * 1 - textTrans.rotateX) * speed
            }deg) rotateY(${
              textTrans.rotateY + (this.transformNumber.rotateY * 1 - textTrans.rotateY) * speed
            }deg)`;
          this.target.img.style.transform  = imgNewTrans;
          this.target.bor.style.transform  = borNewTrans;
          this.target.text.style.transform = textNewTrans;
        }

      }, 60);
    }
  }
  onClick(event, id, path: string, queryParams: object){
    const isPc = this.toolFunction.DETECTOR.isDesktopDevice;

    if (!isPc) {
      this.setTarget(this.listCardUl.nativeElement.querySelectorAll('.list-card-li')[id]);
    }
    const linkContent = this.target.target.querySelector('.link-content');
    const img = this.target.img;
    const li = this.target.target;
    const linkContentSize = linkContent.getBoundingClientRect();
    this.stopSetPos();

    // 將li 設定高

    li.style.height = this.toolFunction.getStyle(li, 'height');

    // 將外容器變絕對定位
    linkContent.style.width  = linkContentSize.width  + 'px';
    linkContent.style.height = linkContentSize.height + 'px';
    linkContent.style.top  = linkContentSize.top  + 'px';
    linkContent.style.left = linkContentSize.left + 'px';
    linkContent.style.position = 'fixed';

    // 判斷點擊得位置
    let rX = isPc ? parseInt( this.imgTrans.rotateX ) : 1;
    let rY = isPc ? parseInt( this.imgTrans.rotateY ) : 1;

    rX = 0 - (rX / Math.abs(rX));
    rY = 0 - (rY / Math.abs(rY));
    img.style.transformOrigin = rX > 0 ? '50% 100%' : '50% 0%';

    setTimeout(() => {
      // 設定啟動ID
      this.onCardClickId = id;
      linkContent.style.top  = '0';
      linkContent.style.left = '0';
      linkContent.style.width  = window.innerWidth  + 'px';
      linkContent.style.height = '100vh';
      img.style.transform = 'rotateX(' + (rX * 15) + 'deg) rotateY(' + (rY * 5) + 'deg) translateY(' + (rX * -10) + 'px)';
      setTimeout(() => {
        img.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
      }, 300);
      setTimeout(() => {
        // 跳頁
        this.linkClick(path, queryParams);
      }, 500);
    }, 10);

  }
  linkClick(path: string, queryParams: object){
    this.routerEvent.linkClick(path, queryParams, false);
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.stopSetPos();
  }

}
