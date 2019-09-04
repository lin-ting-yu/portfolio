import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ToolFunctionService } from '../tool-function.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  // 預設文字
  public defaultText = 'The current messaging function is not yet complete. If you want to send a message, please send it to "louisvvvvb@gmail.com". But clicking on the "submit" effect is cool, you can try it.';
  // 不同動畫階段觸發
  @Output() sendAnStep = new EventEmitter();
  // 送出時觸發
  @Output() onSend = new EventEmitter();
  //messageDOM
  @ViewChild('message', {static: false}) message: ElementRef;

  public isSend = false;
  public isSent = false;
  public sendAnStepNum = null;
  constructor(
    private toolFunction: ToolFunctionService
  ) { }


  send(){
    console.log(45646546);
    if (!this.isSend) {
      this.isSend = true;
      this.onSend.emit();
      let message = this.message.nativeElement;
      let msgHeight = this.toolFunction.getStyle(message, 'height');
      message.style.height = msgHeight;

      // send anmation step: 1
      setTimeout(() => {
        this.sendAnStepNum = 0;
        this.checkSendAnStep(this.sendAnStepNum);
        message.classList.add('step-1');

        // send anmation step: 2
        setTimeout(() => {
          this.sendAnStepNum = 1;
          this.checkSendAnStep(this.sendAnStepNum);
          message.classList.add('step-2');

          // send anmation step: 3
          setTimeout(() => {
            this.sendAnStepNum = 2;
            this.checkSendAnStep(this.sendAnStepNum);
            message.classList.add('step-3');
            setTimeout(() => {
              this.sendAnStepNum = 99;
              this.checkSendAnStep(this.sendAnStepNum);
              message.classList.add('step-fn');
            }, 1000);
          }, 1000);
        }, 1000);
      }, 0);
    }

  }
  checkSendAnStep(step: number){
    this.sendAnStep.emit(step);
  }
  ngOnInit() {
  }

}
