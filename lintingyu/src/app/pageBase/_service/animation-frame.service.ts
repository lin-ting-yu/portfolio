import { Injectable } from '@angular/core';
import { RouterEventService } from './router-event.service';

@Injectable({
  providedIn: 'root'
})
export class AnimationFrameService {
  // 動畫 方法
  public requestAnimationFrame = window.requestAnimationFrame;
  public animationFrame;
  public aniamtionFrameList = [];
  constructor(
    private router: RouterEventService
  ) { }

  bindingAniamtionFrame(fn) {
    let path = this.router.getPathName();
    this.aniamtionFrameList.push({
      path,
      fn
    });
  }
  filterFrameLis() {
    const path = this.router.getPathName();
    this.aniamtionFrameList =
      this.aniamtionFrameList.filter(event => event.path === path);
  }
  clearFrameList() {
    this.aniamtionFrameList = [];
  }
  unbindingAniamtionFrame() {
    this.clearFrameList();
    this.cancelAnimationFrame();
    console.log('45646AAAA54');
  }
  cancelAnimationFrame(){
    cancelAnimationFrame(this.animationFrame);
  }

  eachAn() {
    if (this.aniamtionFrameList.length === 0){
      this.cancelAnimationFrame();
    }
    this.aniamtionFrameList.forEach(event => event.fn());
  }
  startAniamtionFrame() {
    this.eachAn();
    this.animationFrame = this.requestAnimationFrame(() => this.startAniamtionFrame());
  }
}
