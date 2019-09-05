import { Injectable } from '@angular/core';
import { HistoryMapItem } from './history-map.type';

@Injectable({
  providedIn: 'root'
})
export class HistoryMapService {

  constructor() { }

  // 重複Selector直到取得.point 後執行callback
  // 重複取得100次 (10秒) 後跳錯誤
  getLinePointList(nativeElement, path, callback?, parent?): any {
    let times = 0;
    const CheckSetInterval = setInterval(() => {
      const points = nativeElement.querySelectorAll('.points .point');
      times++;
      if (points.length > 0) {
        clearInterval(CheckSetInterval);
        let result = [...points];
        if (callback) {
          callback.call(parent, result);
        }
        return result;

      }
      else if (times > 100) {
        console.error('no ".point" in ".points" in "' + path + '"' );
        clearInterval(CheckSetInterval);
      }
    }, 10);
  }

  // 算出data長度
  getDataLength(data: Array<HistoryMapItem>) {
    let result = 0;
    const rasultArray = [0];
    const lastI = data.length - 1;
    data.forEach((item, i) => {
      if (i === lastI) {
        return false;
      }
      result++;
      if (item.type === 'important' && i > 0) {
        result++;
        rasultArray[ rasultArray.length - 1 ]++;
      }
      rasultArray.push(1);
    });
    return [result, rasultArray];
  }

  // 算出point gap
  setPointGap(allPoint: number , dataLangth: number) {
    return Math.floor((allPoint - 1) / dataLangth);
  }
}
