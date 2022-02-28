import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ListCardService } from './list-card.service';
import { ToolFunctionService } from '../tool-function.service';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';
import { pathData } from '../../data/app-data-path.const';
import { WorkData } from 'src/app/data/app-data-work.const';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  animations: [
    fadeIn
  ]
})


export class ListCardComponent implements OnInit {

  @Input() data: Array<WorkData>;
  @ViewChildren('listCardLi') listCardsLi:　QueryList<ElementRef>;
  private listCardsLiDom = null;
  private targetPos = this.listCardService.targetPos;
  private transformNumber = null;
  private anmation = null;
  private target = null;
  public pathData = pathData;
  public onCardClickId = null;
  public isMobile = !this.toolFunction.DETECTOR.isDesktopDevice;
  private imgTrans = null;
  public handleCardsShow = [];
  constructor(
    private listCardService: ListCardService,
    private toolFunction: ToolFunctionService,
    private routerEvent: RouterEventService
  ) { }
  cardInitShow() {
    setTimeout(()=>{
      this.handleCardsShow.forEach((_, i, array) => {
        setTimeout(() => {
          array[i] = true;
        }, i * 250);
      });
    }, 500);
  }
  startSetPos(event){
    if (!this.onCardClickId && this.onCardClickId !== 0) {
      if (this.isMobile) {
        return;
      }
      this.listCardService.getTargetPos(event);
      this.setTarget(event.target);
      this.setDOMTransform(event);
    }
  }
  stopSetPos(){
    if (this.isMobile) {
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
    if (this.isMobile) {
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
          // let borTrans  = this.toolFunction.getTransform(this.target.bor);
          let textTrans = this.toolFunction.getTransform(this.target.text);

          let imgNewTrans =
            `rotateX(${
              imgTrans.rotateX + (this.transformNumber.rotateX * 2 - imgTrans.rotateX) * speed
            }deg) rotateY(${
              imgTrans.rotateY + (this.transformNumber.rotateY * 2 - imgTrans.rotateY) * speed
            }deg)`;

          // let borNewTrans =
          //   `rotateX(${
          //     borTrans.rotateX + (this.transformNumber.rotateX * 1.5 - borTrans.rotateX) * speed
          //   }deg) rotateY(${
          //     borTrans.rotateY + (this.transformNumber.rotateY * 1.5 - borTrans.rotateY) * speed
          //   }deg)`;

          let textNewTrans =
            `rotateX(${
              textTrans.rotateX + (this.transformNumber.rotateX * 1 - textTrans.rotateX) * speed
            }deg) rotateY(${
              textTrans.rotateY + (this.transformNumber.rotateY * 1 - textTrans.rotateY) * speed
            }deg)`;
          this.target.img.style.transform  = imgNewTrans;
          // this.target.bor.style.transform  = borNewTrans;
          this.target.text.style.transform = textNewTrans;
        }

      }, 60);
    }
  }
  onClick(event, id, path: string, queryParams: object){
    const isPc = !this.isMobile;

    if (!isPc) {
      this.setTarget(this.listCardsLiDom[id].nativeElement);
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
    linkContent.style.transform = 'translateY(0px) ' + (isPc ? 'skewY(0deg)' : '');
    linkContent.style.position = 'fixed';


    // 判斷點擊得位置
    let rX = isPc ? parseInt( this.imgTrans.rotateX ) : 1;
    let rY = isPc ? parseInt( this.imgTrans.rotateY ) : 1;

    rX = 0 - (rX / Math.abs(rX));
    rY = 0 - (rY / Math.abs(rY));
    img.style.transformOrigin = rX > 0 ? '50% 100%' : '50% 0%';

    setTimeout(() => {
      // 設定啟動ID
      linkContent.style.transition = '0.5s';
      img.style.transition = '0.5s';
      this.onCardClickId = id;
      linkContent.style.top  = '0';
      linkContent.style.left = '0';
      linkContent.style.width  = '100%';
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
  ngAfterViewInit(): void {
    this.listCardsLiDom = this.listCardsLi.toArray();
    setTimeout(() => {
      this.listCardsLiDom.forEach(card => {
        this.handleCardsShow.push(false);
      });
      setTimeout(() => {
        this.cardInitShow();
      }, 300);
    }, 0);

  }
  ngOnDestroy(){
    this.stopSetPos();

  }

}
