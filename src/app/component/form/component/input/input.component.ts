import { Component, OnInit, Input } from '@angular/core';
import { FormCheckService } from '../form-check.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() placeholder = 'placeholder';
  @Input() type = 'text';
  public isFoucs = false;
  public isValue = false;


  constructor(
    private formCheck: FormCheckService
  ) { }

  onFoucs(){
    this.isFoucs = this.formCheck.onFoucs();
  }
  onBlur(event){
    this.isFoucs = this.formCheck.onBlur();
    this.isValue = this.formCheck.checkVal(event.target);
  }

  ngOnInit() {
  }

}
