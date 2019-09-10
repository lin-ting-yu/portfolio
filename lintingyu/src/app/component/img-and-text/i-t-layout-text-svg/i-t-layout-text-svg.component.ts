import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { ITLayoutBigImgComponent } from '../i-t-layout-big-img/i-t-layout-big-img.component';
import { AnimationFrameService } from 'src/app/pageBase/_service/animation-frame.service';
import { ToolFunctionService } from '../../tool-function.service';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-i-t-layout-text-svg',
  templateUrl: './i-t-layout-text-svg.component.html',
  styleUrls: ['./i-t-layout-text-svg.component.scss']
})
export class ITLayoutTextSvgComponent extends ITLayoutBigImgComponent {
  @ViewChildren(SvgIconComponent) svgComps;
  @Input() pageTitle = '';
  @Input() initShowSvg = true;
  @Input() svg = true;
  public svgSize = {
    width: 0,
    height: 0
  };
  private windowWidth = 0;
  constructor(
    private anFrame: AnimationFrameService,
    private toolFn: ToolFunctionService
  ) {
    super();
  }

  showSvg(){
    this.svg = true;
  }
  setSvgSize() {
    if (this.windowWidth !== window.innerWidth || !this.svgSize.width) {
      if (this.svgComps) {
        const svgComp = this.svgComps.toArray()[0].element.nativeElement;
        this.svgSize =
          this.toolFn.getSvgSize(
            svgComp,
            () => { this.windowWidth = window.innerWidth; }
          );
      }
    }
  }
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.anFrame.bindingAniamtionFrame(() => this.setSvgSize());
  }
}
