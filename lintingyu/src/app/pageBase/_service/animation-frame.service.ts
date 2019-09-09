import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationFrameService {
  // 動畫 方法
  public requestAnimationFrame = window.requestAnimationFrame;
  public animationFrame;
  constructor() { }

  bindingAniamtionFrame(fn) {
    fn();
    this.animationFrame = this.requestAnimationFrame(() => this.bindingAniamtionFrame(fn));
  }

  unbindingAniamtionFrame() {
    cancelAnimationFrame(this.animationFrame);
  }
}
