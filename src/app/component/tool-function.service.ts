import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Injectable({
  providedIn: 'root'
})
export class ToolFunctionService {
  deviceInfo = null;
  constructor(
    private deviceService: DeviceDetectorService
  ) { }

  public DETECTOR = this.epicFunction();

  // 判斷裝置
  epicFunction() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    return {
      isMobile,
      isTablet,
      isDesktopDevice
    }
  }
  // 取得樣式
  getStyle(el, styleProp) {
    let value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
        return (function(value) {
          let oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
  }
  // 取得Transform rotate
  getTransform(obj) {

    let matrix = this.getStyle(obj, 'transform');
    let rotateX = 0;
    let rotateY = 0;
    let rotateZ = 0;

    if (matrix !== 'none') {

        // do some magic
        let values = matrix.split('(')[1].split(')')[0].split(',');
        let pi = Math.PI;
        let sinB = parseFloat(values[8]);
        let b = Math.round(Math.asin(sinB) * 180 / pi);
        let cosB = Math.cos(b * pi / 180);
        let matrixVal10 = parseFloat(values[9]);
        let a = Math.round(Math.asin(-matrixVal10 / cosB) * 180 / pi);
        let matrixVal1 = parseFloat(values[0]);
        let c = Math.round(Math.acos(matrixVal1 / cosB) * 180 / pi);

        rotateX = a;
        rotateY = b;
        rotateZ = c;

    }
    return {
        rotateX,
        rotateY,
        rotateZ
    };
  }
  // 判斷是否為DOM物件
  isDOM(HTMLElement){
    let isDOM = ( typeof HTMLElement === 'object' ) ?
                function(obj) {
                    return obj instanceof HTMLElement;
                } :
                function(obj) {
                    return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
                }
    return isDOM;
  }
  // 重複獲取直到獲取到
  reCheck(parent, bool, success?, fail?, lime?: number){
    let times = 0;
    let reCheck = setInterval(() => {

      if ( bool.call(parent) ) {
        success.call(parent);
        clearInterval(reCheck);
      }
      else if (lime && ++times > lime){
        fail.call(parent);
        clearInterval(reCheck);
      }
    }, 10);
  }


  // 設定svg尺寸
  getSvgSize(svgComp, callback?) {
    if (svgComp) {
      // this.windowWidth = window.innerWidth;
      let svgDOM = svgComp.querySelector('svg');
      if (svgDOM) {
        let result;
        let svgWidth  = parseFloat(svgDOM.getAttribute('width'));
        let svgHeight = parseFloat(svgDOM.getAttribute('height'));

        let parent = svgComp.offsetParent;
        let parentPL = parseFloat(this.getStyle(parent, 'padding-left'));
        let parentPR = parseFloat(this.getStyle(parent, 'padding-right'));

        let parentClientRect = parent.getBoundingClientRect();
        let parentWidth = parentClientRect.width;
        let resultWidth = parentWidth - parentPL - parentPR;
        result = {
          width: resultWidth,
          height: parentWidth / svgWidth * svgHeight,
          percen: resultWidth / svgWidth,
          originSvgSize: {
            width:  svgWidth,
            height: svgHeight
          }
        };
        if (callback) {
          callback();
        }
        return result;
      }
    }
    return {
      width: 0,
      height: 0,
      percen: 1
    };
  }
}
