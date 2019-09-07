import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-pint-list',
  templateUrl: './select-pint-list.component.html',
  styleUrls: ['./select-pint-list.component.scss']
})
export class SelectPintListComponent implements OnInit {
  @Input() pointLength = 3;
  @Input() active = 0;
  @Input() arrowSize = 4;
  @Output() onClick = new EventEmitter();
  public forNgForArray = [];
  // svg寬高
  public svgSizeWidth: number;
  public svgSizeHeight = 15;
  private lineLength = 30;

  // 點間距
  private svgGap = 12;
  // 線條座標array
  private pointsArray = [];
  // 線條座標array 轉字串
  public points = '';

  // 箭頭座標array
  private arrowArray = [];
  // 箭頭座標array 轉字串
  public arrow = '';
  // 給sin計算波用
  private countYMove = 0;
  // 方向及速度
  private speed = 2;
  // 線條初始中間高
  private y = (this.svgSizeHeight - 1) / 2 + 1;

  // 動畫 方法
  private requestAnimationFrame = window.requestAnimationFrame;
  private animationFrame;
  constructor() { }

  lineYMove() {
    for (let point = 0; point <= this.lineLength - 2; point++) {
      this.pointsArray[point][1] = this.pointsArray[point + 1][1];
    }
    this.pointsArray[this.lineLength - 1][1] = this.y + Math.sin(++this.countYMove / 5);
  }
  lineXMove() {
    let EndPosX = 40 + (this.active * this.svgGap) + (this.active * this.svgSizeHeight) - 8;
    let nowX = this.pointsArray[this.lineLength - 1][0];
    if (nowX !== EndPosX) {
      for (let point = 0; point <= this.lineLength - 2; point++) {
        this.pointsArray[point][0] = this.pointsArray[point + 1][0];
      }
      this.speed = (EndPosX - nowX) / Math.abs(EndPosX - nowX);
      this.pointsArray[this.lineLength - 1][0] += this.speed;
    }
    else {
      this.speed = Math.abs(this.speed);
      for (let point = 0; point <= this.lineLength - 2; point++) {
        if (EndPosX - this.pointsArray[point][0] !== this.lineLength - point) {
          this.pointsArray[point][0] -= this.speed;
        }
      }
    }
  }
  arrowMove() {
    let nowX = this.pointsArray[this.lineLength - 1][0];
    let nowY = this.pointsArray[this.lineLength - 1][1];
    this.arrowArray[1] = [nowX, nowY];

    if (this.speed > 0) {
      this.arrowArray[0] = [nowX - this.arrowSize , nowY - this.arrowSize];
      this.arrowArray[2] = [nowX - this.arrowSize , nowY + this.arrowSize];
    }
    else {
      this.arrowArray[0] = [nowX + this.arrowSize , nowY - this.arrowSize];
      this.arrowArray[2] = [nowX + this.arrowSize , nowY + this.arrowSize];
    }
  }
  setActive(i: number) {
    this.active = i;
    this.onClick.emit(i);
  }
  initWidth() {
    if (this.pointLength > 1){
      this.svgSizeWidth =
        (this.pointLength * this.svgSizeHeight) + // 點的總寬度
        ((this.pointLength - 1) * this.svgGap) + // 間距的總寬度
        40 // 選取間距的寬度
    }
    else {
      this.svgSizeWidth = (this.pointLength * this.svgSizeHeight) + 40;
    }
  }
  initPointsArray() {
    for (let x = 1; x <= this.lineLength; x++) {
      this.pointsArray.push( [x, this.y] );
    }
  }
  setPointsArrayToPoints() {
    this.points = '';
    this.pointsArray.forEach(point => {
      this.points += point + ' ';
    });
  }
  setArrowArrayToArrow() {
    this.arrow = '';
    this.arrowArray.forEach(point => {
      this.arrow += point + ' ';
    });
  }
  initArrowArray() {
    this.arrowArray = [
      [this.lineLength - this.arrowSize, this.y - this.arrowSize],
      [this.lineLength                 , this.y                 ],
      [this.lineLength - this.arrowSize, this.y + this.arrowSize]
    ];
  }
  animation() {
    this.lineYMove();
    this.lineXMove();
    this.arrowMove();
    this.setPointsArrayToPoints();
    this.setArrowArrayToArrow();
  }
  aniamtionFrameInit(fn) {
    fn();
    this.animationFrame = this.requestAnimationFrame(() => this.aniamtionFrameInit(fn));
  }
  ngOnInit() {
    this.forNgForArray.length = this.pointLength;
    this.initWidth();
    this.initPointsArray();
    this.initArrowArray();

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.aniamtionFrameInit(() => {
        this.animation();
      });
    }, 0);
  }
  // 關閉動畫
  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrame);
  }
}
