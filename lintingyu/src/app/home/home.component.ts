import { Component, ElementRef, HostListener } from '@angular/core';
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
export class HomeComponent extends PageComponent {
  // canvas Id
  public id: string;
  // canvas DOM
  public canvasDOM;
  // canvas size
  public canvasSize = {width:0, height:0};
  // canvas DOM get 2d
  public ctx;
  // canvas 初始設定結束
  private canvasAllRadey = false;

  // 圖初始寬高
  private originalW = 280;
  private originalH = 150;
  private aspectRatio = this.originalW / this.originalH;
  // mouse in canvas pos
  public ineerCtxPos = {x: 0, y: 0};
  // 縮放
  public transform = {
    scale: 4,
    translate: {
      x: 500, y: 400
    }
  }
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
      this.friction = 0.9
      this.speed = 1;
    } else if (i === 1) {
      this.spring = 0.2;
      this.friction = 0.9
      this.speed = 0.01;
    } else if (i === 2) {
      this.spring = 0.4;
      this.friction = 0.99
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
        this.ineerCtxPos = this.canvasEvent.bindingMouseMove(event);
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
      this.ineerCtxPos = this.canvasEvent.bindingMouseMove(event);
    }
  }
  mouseUp(event) {
    if (this.toolFn.DETECTOR.isDesktopDevice) {
      this.linePower = 5000;
      this.fillPower = 3000;
    } else {
      this.ineerCtxPos = {x: -999, y: -999};
    }
  }
  @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.setCanvasSize(event.target.innerWidth, event.target.innerHeight);
      this.calculateTransform();
      this.dotsTransform();
    }
  // 型變
  calculateTransform() {
    if (this.canvasSize.width > 768) {
      let width = this.canvasSize.width * 0.65;
      let scale = width / this.originalW;
      let bottomGap = this.canvasSize.width >= 1920 ? 80 : 60;
      if ((scale * this.originalH) / this.canvasSize.height > 0.625) {
        scale = this.canvasSize.height * 0.625 / this.originalH;
      }
      this.transform.scale = scale;
      this.transform.translate.x = this.canvasSize.width  * 0.87 - scale * this.originalW;
      this.transform.translate.y = this.canvasSize.height - bottomGap - scale * this.originalH;
    } else {
      let width = (this.canvasSize.width - 50);
      let scale = width / this.originalW;

      if ((scale * this.originalH) / this.canvasSize.height > 0.3) {
        scale = this.canvasSize.height * 0.3 / this.originalH;
      }
      this.transform.scale = scale;
      this.transform.translate.x = (this.canvasSize.width - scale * this.originalW) / 2;
      this.transform.translate.y = this.canvasSize.height - 120 - scale * this.originalH;
    }
  }
  dotsTransform() {
    // fill控制變形
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
    // this.mouse.moveTo(this.ineerCtxPos);
    // this.canvasEvent.dorwDot(this.ctx, this.mouse, 10, {drowFill: true});
    // fill動畫控制
    this.fillDotVector.forEach(line => {
      line.forEach(dot => {
        let dotMoveTo = this.canvasEvent.dotInteractive(
          dot, this.ineerCtxPos, this.fillPower, false
        );
        dot.moveTo(dotMoveTo);
      });
      this.canvasEvent.dorwPath(
        this.ctx,
        line,
        true,
        { drowFill: true,
          fillStyle: "rgba(115, 242, 141, 0.6)"
        }
      );
    });
    // stroke動畫控制
    this.strokeDotVector.forEach(line => {
      line.forEach(dot => {
        let dotMoveTo = this.canvasEvent.dotInteractive(
          dot, this.ineerCtxPos, this.linePower
        );
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
    this.canvasSize.width = width;
    this.canvasSize.height = height;
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
    this.ctx = this.canvasDOM.getContext("2d");
    this.canvasEvent.setTargetPos(this.canvasDOM);
    this.canvasAllRadey = true;
    this.anFrame.bindingAniamtionFrame(() => {
      this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
      this.drowCanvas();
    });
    this.anFrame.startAniamtionFrame();
  }
  // 以下為 hooks
  ngOnInit() {
    this.setId();
    this.setCanvasSize(window.innerWidth, window.innerHeight);
    this.linDataDotInit();
    this.calculateTransform();
    this.dotsTransform();
    // 僅此頁控制 body
    document.body.style.overflow = 'hidden';
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit (): void {
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
