import { Injectable } from '@angular/core';
import { ToolFunctionService } from '../../tool-function.service';
@Injectable({
  providedIn: 'root'
})
export class FormCheckService {
  public isFoucs = false;
  public isValue = false;

  constructor(
    private toolFunction: ToolFunctionService
  ) { }


  onFoucs(){
    this.isFoucs = true;
    return this.isFoucs;
  }
  onBlur(){
    this.isFoucs = false;
    return this.isFoucs;
  }
  checkVal(event){
    if (event) {
      let val = event.value;
      if (val.length === 0) {
        this.isValue = false;
      }
      else if (val.length > 0) {
        this.isValue = true;
      }
      return this.isValue;
    }
  }
}
