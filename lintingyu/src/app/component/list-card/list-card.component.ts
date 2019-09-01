import { Component, OnInit } from '@angular/core';
import { ListCardService } from './list-card.service';
import { ToolFunctionService } from '../tool-function.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})


export class ListCardComponent implements OnInit {
  private targetPos = this.listCardService.targetPos;
  private transformNumber = null;
  private anmation;
  private target = null;

  constructor(
    private listCardService: ListCardService,
    private toolFunction: ToolFunctionService
  ) { }

  startSetPos(event){
    if (!this.toolFunction.DETECTOR.isDesktopDevice) {
      return;
    }
    this.listCardService.getTargetPos(event);
    console.log(event);
    this.setTarget(event);
    this.setDOMTransform(event);
  }
  stopSetPos(){
    if (!this.toolFunction.DETECTOR.isDesktopDevice) {
      return;
    }
    this.listCardService.reset();
    this.transformNumber = null;
    clearInterval(this.anmation);
    this.target.img.style.transform  = '';
    this.target.text.style.transform = '';
    this.target.bor.style.transform  = '';
    this.target = null;
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
          let imgTrans = this.toolFunction.getTransform(this.target.img);
          let borTrans = this.toolFunction.getTransform(this.target.bor);

          let imgNewTrans =
            `rotateX(${
              imgTrans.rotateX + (this.transformNumber.rotateX * 2 - imgTrans.rotateX) * speed
            }deg) rotateY(${
              imgTrans.rotateY + (this.transformNumber.rotateY * 2 - imgTrans.rotateY) * speed
            }deg)`;

          let borNewTrans =
            `rotateX(${
              borTrans.rotateX + (this.transformNumber.rotateX - borTrans.rotateX) * speed
            }deg) rotateY(${
              borTrans.rotateY + (this.transformNumber.rotateY - borTrans.rotateY) * speed
            }deg)`;

          this.target.img.style.transform  = imgNewTrans;
          this.target.text.style.transform = borNewTrans;
          this.target.bor.style.transform  = borNewTrans;
        }

      }, 60);
    }
  }

  ngOnInit() {
  }

}
