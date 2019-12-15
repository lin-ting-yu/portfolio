import { Component, ElementRef, HostListener, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PageComponent } from '../pageBase/page.component';
import { Vector } from '../component/canvas/canvas-drow';
import { CanvasEventService } from '../component/canvas/canvas-event.service';
import { ToolFunctionService } from '../component/tool-function.service';
import { linStrokeData, linFillData } from '../data/app-data-canvas.const';
import { AnimationFrameService } from '../pageBase/_service/animation-frame.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageComponent implements OnInit, AfterViewInit, OnDestroy {
// canvas Id
public id: string;
  // canvas DOM
  public canvasDOM;
  // canvas size
  public canvasSize = {width: 0, height: 0};

  // canvas DOM get 2d
  public ctx;
  // canvas 初始設定結束
  private canvasAllRadey = false;

  // window size
  private windowWidth = 0;
  private windowHeight = 0;
  // 圖初始寬高
  private originalW = 280;
  private originalH = 150;
  private aspectRatio = this.originalW / this.originalH;
  // mouse in canvas pos
  public innerCtxPos = {x: 0, y: 0};
  // 縮放
  public transform = {
    scale: 4,
    translate: {
      x: 500, y: 400
    }
  };
  // canvas proportion fo mouse size
  private canvasMouseTranslate = {x: null, y: null};
  // 彈力 & 摩擦力
  private spring = 0.2;  // 彈力細數
  private friction = 0.9; // 摩擦力
  private speed = 1; // 速度
  private linePower = 5000; // 線條受力
  private fillPower = 3000;
  // private mouse = new Vector(300, 200);

  // Fill data
  private linFillData = linFillData;
  // Fill Vector data
  public fillDotVector = null;
  // line data
  private linStrokeData = linStrokeData;
  // line Vector data
  public strokeDotVector = null;

  // 控制點的數量
  public itemlist = 3;
  public active = 0;
  constructor(
    private el: ElementRef,
    private canvasEvent: CanvasEventService,
    private toolFn: ToolFunctionService,
    private anFrame: AnimationFrameService
  ) {
    super();
  }

  // 事件
  onListChange(i) {
    this.active = i;
    if (i === 0) {
      this.spring = 0.2;
      this.friction = 0.9;
      this.speed = 1;
    } else if (i === 1) {
      this.spring = 0.2;
      this.friction = 0.9;
      this.speed = 0.01;
    } else if (i === 2) {
      this.spring = 0.4;
      this.friction = 0.99;
      this.speed = 1.5;
    }

    this.setSpringFrictionSpeed(this.fillDotVector);
    this.setSpringFrictionSpeed(this.strokeDotVector);
  }
  mouseMove(event) {
    if (this.toolFn.DETECTOR.isDesktopDevice) {
      if (this.canvasAllRadey) {
        if (this.canvasEvent.targetPos.top < 0) {
          this.canvasEvent.setTargetPos(this.canvasDOM);
        }
        this.innerCtxPos = this.canvasEvent.bindingMouseMove(event);
      }
    }
  }
  mouseDown(event) {
    if (this.toolFn.DETECTOR.isDesktopDevice) {
      this.linePower = 20000;
      this.fillPower = 10000;
    } else {
      if (this.canvasEvent.targetPos.top < 0) {
        this.canvasEvent.setTargetPos(this.canvasDOM);
      }
      this.innerCtxPos = this.canvasEvent.bindingMouseMove(event);
    }
  }
  mouseUp(event) {
    if (this.toolFn.DETECTOR.isDesktopDevice) {
      this.linePower = 5000;
      this.fillPower = 3000;
    } else {
      this.innerCtxPos = {x: 0, y: 0};
    }
  }
  onResize() {
    if (this.windowWidth !== window.innerWidth || this.windowHeight !== window.innerHeight) {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
      this.setCanvasSize(this.windowWidth, this.windowHeight);
      this.calculateTransform();
      this.dotsTransform();
      this.setCanvasProportionMmouseSize();
    }
  }

  setSelectPointListPos() {
    return this.windowWidth > 768 ? (this.transform.translate.x / window.devicePixelRatio + 100) + 'px' : '';
  }
  // 滑鼠偏移
  setCanvasProportionMmouseSize() {
    if (this.toolFn.DETECTOR.isDesktopDevice) {
      this.canvasMouseTranslate.x = 25 - this.innerCtxPos.x * 50 / this.canvasSize.width;
      this.canvasMouseTranslate.y = 25 - this.innerCtxPos.y * 50 / this.canvasSize.height;
    }
  }
  // 型變
  calculateTransform() {
    if (this.windowWidth > 768) {
      const width = this.canvasSize.width * 0.65;
      let scale = width / this.originalW;
      const bottomGap = this.canvasSize.width >= 1920 ? 80 : 60;
      if ((scale * this.originalH) / this.canvasSize.height > 0.625) {
        scale = this.canvasSize.height * 0.625 / this.originalH;
      }
      this.transform.scale = scale;
      this.transform.translate.x = this.canvasSize.width  * 0.87 - scale * this.originalW;
      this.transform.translate.y = this.canvasSize.height - bottomGap - scale * this.originalH;
    } else {
      if (this.windowHeight > 420) {
        const width = (this.canvasSize.width - 50 * window.devicePixelRatio);
        let scale = width / this.originalW;

        if ((scale * this.originalH) / this.canvasSize.height > 0.26) {
          scale = this.canvasSize.height * 0.26 / this.originalH;
        }
        this.transform.scale = scale;
        this.transform.translate.x = (this.canvasSize.width - scale * this.originalW) / 2;
        this.transform.translate.y = this.canvasSize.height - 120 * window.devicePixelRatio - scale * this.originalH;
      } else {
        const heieht = this.canvasSize.height / 2.3 ;
        const scale = heieht / this.originalH;


        this.transform.scale = scale;
        this.transform.translate.x = (this.canvasSize.width - scale * this.originalW) - (50 * window.devicePixelRatio);
        this.transform.translate.y = this.canvasSize.height -( 80 * window.devicePixelRatio) - (scale * this.originalH);
      }
    }
  }
  dotsTransform() {
    // fill控制變形\
    this.fillDotVector.forEach(line => {
      line.forEach(dot => {
        dot.transform(
          this.transform.scale,
          this.transform.translate.x,
          this.transform.translate.y
        );
      });
    });
    // 線條控制變形
    this.strokeDotVector.forEach(line => {
      line.forEach(dot => {
        dot.transform(
          this.transform.scale,
          this.transform.translate.x,
          this.transform.translate.y
        );
      });
    });
  }
  setSpringFrictionSpeed(array) {
    array.forEach(line => {
      line.forEach(dot => {
        dot.spring   = this.spring;
        dot.friction = this.friction;
        dot.speed    = this.speed;
      });
    });
  }
  // 繪製
  drowCanvas() {
    // this.mouse.moveTo(this.innerCtxPos);
    // this.canvasEvent.dorwDot(this.ctx, this.mouse, 10, {drowFill: true});
    // fill動畫控制
    // this.dotsTransform();
    this.setCanvasProportionMmouseSize();
    const moveX = this.canvasMouseTranslate.x !== null ? this.canvasMouseTranslate.x : 0;
    const moveY = this.canvasMouseTranslate.y !== null ? this.canvasMouseTranslate.y : 0;

    this.fillDotVector.forEach(line => {
      line.forEach(dot => {
        const dotMoveTo = this.canvasEvent.dotInteractive(
          dot, this.innerCtxPos, this.fillPower, false
        );
        dotMoveTo.x -= moveX;
        dotMoveTo.y -= moveY;
        dot.moveTo(dotMoveTo);
      });
      this.canvasEvent.dorwPath(
        this.ctx,
        line,
        true,
        { drowFill: true,
          fillStyle: 'rgba(115, 242, 141, 0.6)'
        }
      );
    });
    // stroke動畫控制
    this.strokeDotVector.forEach(line => {
      line.forEach(dot => {
        const dotMoveTo = this.canvasEvent.dotInteractive(
          dot, this.innerCtxPos, this.linePower
        );
        dotMoveTo.x += moveX;
        dotMoveTo.y += moveY;
        dot.moveTo(dotMoveTo);
      });
      this.canvasEvent.dorwPath(
        this.ctx,
        line,
        false,
        { drowStroke: true}
      );
    });
  }
  // 初始設定
  // 設定canvas size
  setCanvasSize(width, height) {
    this.canvasSize.width = width * window.devicePixelRatio;
    this.canvasSize.height = height * window.devicePixelRatio;
  }
  setId() {
    this.id = 'canvas-id-' + (new Date().getTime());
  }
  getCanvasDOM() {
    this.canvasDOM = this.el.nativeElement.querySelector('#' + this.id);
  }
  // 將字串data轉為vector array
  dataToVector(data) {
    return data
        .map(line => {
          return line.map(dot => {
            return new Vector(dot[0], dot[1], this.spring, this.friction);
          });
        });
  }
  linDataDotInit() {
    this.fillDotVector = this.dataToVector(this.linFillData);
    this.strokeDotVector = this.dataToVector(this.linStrokeData);
  }
  afterGetCanvasDOM() {
    this.ctx = this.canvasDOM.getContext('2d');
    this.canvasEvent.setTargetPos(this.canvasDOM);
    this.canvasAllRadey = true;
    this.anFrame.bindingAniamtionFrame(() => {
      this.onResize();
      this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
      this.drowCanvas();
    });
    this.anFrame.startAniamtionFrame();
  }
  // 以下為 hooks
  ngOnInit() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.setId();
    this.setCanvasSize(this.windowWidth, this.windowHeight);
    this.linDataDotInit();
    this.calculateTransform();
    this.dotsTransform();
    this.setCanvasProportionMmouseSize();
    // 僅此頁控制 body
    document.body.style.overflow = 'hidden';
  }
  ngAfterViewInit(): void {
    this.getCanvasDOM();
    this.toolFn.reCheck(
      this,
      () => this.canvasDOM,
      this.afterGetCanvasDOM
    );
  }
  // 關閉動畫
  ngOnDestroy() {
    this.anFrame.unbindingAniamtionFrame();
    // 僅此頁控制 body
    document.body.style.overflow = '';
  }
}
