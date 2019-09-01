import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCardService {

  constructor() { }

  public targetPos = null;

  getTargetPos(event){
    if(event){
      let pos = event.target.getBoundingClientRect();
      pos.centerX = pos.width  / 2;
      pos.centerY = pos.height / 2;
      pos.proportionX = 5 / pos.width * 2;
      pos.proportionY = 5 / pos.height * 2;
      this.targetPos = pos;
      return pos;
    }
  }
  getTransformNumber(event){
    if(event && this.targetPos){
      const result = {
        rotateX: 0,
        rotateY: 0
      };
      const innerMouseX = event.clientX - this.targetPos.x;
      const innerMouseY = event.clientY - this.targetPos.y;

      result.rotateX = -(innerMouseY - this.targetPos.centerY) * this.targetPos.proportionY;
      result.rotateY =  (innerMouseX - this.targetPos.centerX) * this.targetPos.proportionX;

      return result;
    }
  }
  reset(){
    this.targetPos = null;
  }
}
