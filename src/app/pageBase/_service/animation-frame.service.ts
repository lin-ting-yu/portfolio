import { Injectable } from '@angular/core';
import { auditTime, Subject, Subscription } from 'rxjs';
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
  ) {}

  private animationSubject = new Subject<void>();
  private animationSubject$: Subscription;

  bindingAniamtionFrame(fn) {
    const path = this.router.getPathName();
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
  }
  cancelAnimationFrame() {
    cancelAnimationFrame(this.animationFrame);
    if (this.animationSubject$) {
      this.animationSubject$.unsubscribe();
    }
  }

  eachAn() {
    if (this.aniamtionFrameList.length === 0) {
      this.cancelAnimationFrame();
    }
    this.aniamtionFrameList.forEach(event => event.fn());
  }
  startAniamtionFrame() {
    if (this.animationSubject$) {
      this.animationSubject$.unsubscribe();
      this.animationSubject$ = null;
    }
    this.animationSubject$ = this.animationSubject.pipe(auditTime(16)).subscribe(() => {
      this.eachAn();
    });
    this.an();
  }

  private an() {
    this.animationFrame = this.requestAnimationFrame(() => this.an());
    this.animationSubject.next();
  }
}
