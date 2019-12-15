import { Injectable } from '@angular/core';
import { Vector } from './canvas-drow';

@Injectable({
  providedIn: 'root'
})
export class CanvasEventService {

  constructor() { }
  public targetPos = null;

  setTargetPos(target) {
    this.targetPos = target.getBoundingClientRect();
  }

  bindingMouseMove(event) {
    if (this.targetPos === null) {
      this.setTargetPos(event.target);
    }
    const innerPageX = typeof event.pageX === 'number' ? event.pageX : event.touches[0].pageX;
    const innerPageY = typeof event.pageY === 'number' ? event.pageY : event.touches[0].pageY;
    const mousePos = {
      x: (innerPageX - this.targetPos.left) * window.devicePixelRatio,
      y: (innerPageY - this.targetPos.top) * window.devicePixelRatio
    }
    // console.log(mousePos,this.targetPos);
    return mousePos;
  }
  _style(ctx, style){
    if (style) {
      const keys = Object.keys(style);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (ctx[key]) {
          ctx[key] = style[key];
        }
      }
    }
  }
  dorwDot(ctx, vector: Vector, radius = 10, style?) {
    ctx.save();
    ctx.beginPath();

    this._style(ctx, style);

    ctx.arc(vector.x, vector.y, radius, 0, 2 * Math.PI);

    if (style.drowStroke) {
      ctx.stroke();
    }
    if (style.drowFill) {
      ctx.fill();
    }
    ctx.closePath();
    ctx.restore();
  }

  dorwPath(ctx, dots: Array<Vector>, closePath: boolean, style) {
    ctx.beginPath();

    ctx.save();
    ctx.beginPath();
    this._style(ctx, style);


    for (let i = 0, jlen = dots.length; i <= jlen; ++i) {
      if (!closePath && (i + 0 >= jlen || i + 1 >= jlen)) {
        break;
      }
      const p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
      const p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
      ctx.quadraticCurveTo( p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
    }

    if (style.drowStroke) {
      ctx.stroke();
    }
    if (style.drowFill) {
      ctx.fill();
    }
    if (closePath) {
      ctx.closePath();
    }
    ctx.restore();
  }

  dotInteractive(
    dot: Vector, // 點位置
    active, // 互動單位位置
    power: number = 2000,
    attract: boolean = true, // 吸引或排斥
  ) {
    let activeToDotX = dot.transformX  - active.x;
    let activeToDotY = dot.transformY  - active.y;


    const activeToDotXAbs = Math.abs(activeToDotX);
    const activeToDotYAbs = Math.abs(activeToDotY);


    // 避免距離過近
    const soClose = 20;

    if (activeToDotXAbs < soClose && activeToDotYAbs < soClose) {
      if (activeToDotX === 0 || activeToDotY === 0) {
        if (activeToDotX === 0) { activeToDotX + 1; }
        else { activeToDotY + 1; }
      }
      if (activeToDotX > 0) {
        activeToDotX = soClose; }
      else {
        activeToDotX = -soClose; }

      if (activeToDotY > 0) {
        activeToDotY = soClose; }
      else {
        activeToDotY = -soClose; }
    }


    // 算出滑鼠與球距離
    const activeToDotLength = Math.sqrt(activeToDotX * activeToDotX + activeToDotY * activeToDotY);

    // 算出滑鼠與球角度
    let ballAngle = Math.atan2(activeToDotY, activeToDotX);
    const GforBall = power / activeToDotLength;

    // 算出球與目標終點距離
    let ballEndLong = attract ? activeToDotLength + GforBall : activeToDotLength - GforBall;

    const result = {
      x: active.x + ballEndLong * Math.cos(ballAngle),
      y: active.y + ballEndLong * Math.sin(ballAngle)
    };
    if (!attract) {
      ballAngle += Math.PI;
      ballEndLong = GforBall - activeToDotLength;
    }

    return result;
  }
}
