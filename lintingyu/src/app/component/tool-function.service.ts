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

  epicFunction() {
    console.log('hello `Home` component');
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
  getStyle(obj, attr){
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
  }
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
}
