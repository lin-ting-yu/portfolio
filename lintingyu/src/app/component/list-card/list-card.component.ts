import { Component, OnInit, Input } from '@angular/core';
import { ListCardService } from './list-card.service';
import { ToolFunctionService } from '../tool-function.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { RouterEventService } from 'src/app/pageBase/_service/router-event.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})


export class ListCardComponent implements OnInit {

  @Input() data: Array<object>;
  private targetPos = this.listCardService.targetPos;
  private transformNumber = null;
  private anmation = null;
  private target = null;

  constructor(
    private listCardService: ListCardService,
    private toolFunction: ToolFunctionService,
    private routerEvent: RouterEventService
  ) { }

  startSetPos(event){
    if (!this.toolFunction.DETECTOR.isDesktopDevice) {
      return;
    }
    this.listCardService.getTargetPos(event);
    this.setTarget(event);
    this.setDOMTransform(event);
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
      img:  event.target.querySelector('.img-content'),
      bor:  event.target.querySelector('.img-border'),
      text: event.target.querySelector('.info-text-content')
    }
  }
  setDOMTransform(event){
    if (event){
      this.anmation = setInterval(() => {
        if (this.transformNumber){
          let speed = 0.2;
          let imgTrans  = this.toolFunction.getTransform(this.target.img);
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

  linkClick(path: string, page: string){
    this.routerEvent.linkClick(path, page);
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    this.stopSetPos();
  }

}
