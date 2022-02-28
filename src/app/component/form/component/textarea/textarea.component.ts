import { Component, OnInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FormCheckService } from '../form-check.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @ViewChild('textarea', {static: false}) textarea: ElementRef;
  @Input() placeholder = 'placeholder';
  @Input() defaultText = '';
  public isFoucs = false;
  public isValue = false;

  constructor(
    private formCheck: FormCheckService
  ) { }

  onFoucs() {
    this.isFoucs = this.formCheck.onFoucs();
  }
  onBlur(event) {
    this.isFoucs = this.formCheck.onBlur();
    this.isValue = this.formCheck.checkVal(event.target);
  }
  checkSize() {
    const textarea = this.textarea.nativeElement;
    let fnHeight = 140;
    textarea.style.height = '140px';
    fnHeight = textarea.scrollHeight > fnHeight ? textarea.scrollHeight : fnHeight;
    textarea.style.height = fnHeight + 'px';
  }

  @HostListener('window:resize',['$event'])
  onResize(event) {
    this.checkSize();
  }
  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.isValue = this.formCheck.checkVal(this.textarea.nativeElement);
      this.checkSize();
    }, 0);
  }

}
