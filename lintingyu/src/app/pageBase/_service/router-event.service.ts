import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterEventService {


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }
  getPathName(){
    if (this.router.url === "/" || this.router.url === ""){
      return '';
    }
    return this.router.url.match(/\/([^?]*)/)[1];
  }
  getUrl() {
    return this.router.url;
  }
  linkClick(path: string, queryParams?: object, wait: boolean = true, time: number = 300) {
    if (this.router.url === '/' + path){
      let scrollToTop = setInterval(() => {
        let s = window.pageYOffset + (0 - window.pageYOffset) * 0.5;
        window.scroll(0, s);
        if (window.pageYOffset === 0) {
          clearInterval( scrollToTop );
        }
      }, 60);
    }
    else {
      if (wait) {
        setTimeout(() => {
          window.scroll(0, 0);
        }, time);
      }
      else {
        window.scroll(0, 0);
      }
    }
    if (queryParams) {
      this.router.navigate(
        [path],
        { queryParams }
      );
    }
    else{
      this.router.navigate([path]);
    }
  }
  getQueryParamse(name: string) {
    let result;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      result = queryParams[name];
    });
    return result;
  }
}
