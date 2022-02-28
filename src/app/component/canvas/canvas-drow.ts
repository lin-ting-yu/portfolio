



class Vector {
  // 現在位置
  public x: number;
  public y: number;
  // 初始位置
  public originalX: number;
  public originalY: number;
  // 縮放位移後位置
  public transformX: number;
  public transformY: number;
  // 移動位置
  public moveX = 0;
  public moveY = 0;
  // 終點位置
  public fnX: number;
  public fnY: number;

  // public speed: number;
  public spring: number;
  public friction: number;
  public speed: number;

  constructor(
    x: number = 0,
    y: number = 0,
    spring: number = 0,  // 彈力細數
    friction: number = 1, // 摩擦力
    speed: number = 1
    ) {
    this.x = x;
    this.y = y;
    this.originalX = x;
    this.originalY = y;
    this.transformX = x;
    this.transformY = y;
    this.spring = spring;
    this.friction = friction;
    this.speed = speed;
  }
  transform(scale, translateX: number = 0, translateY: number = 0){
    this.x = this.originalX * scale + translateX;
    this.y = this.originalY * scale + translateY;
    this.transformX = this.x;
    this.transformY = this.y;
  }
  setPos(pos){
    this.x = pos.x;
    this.y = pos.y;
    this.originalX = pos.x;
    this.originalY = pos.y;
  }
  moveTo(pos){
    this.fnX = pos.x;
    this.fnY = pos.y;
    if (this.spring > 0) {
      this.moveX += (this.fnX - this.x) * this.spring;
      this.moveY += (this.fnY - this.y) * this.spring;
      this.moveX *= this.friction;
      this.moveY *= this.friction;
      this.x += this.moveX * this.speed;
      this.y += this.moveY * this.speed;
    }
    else{
      this.x = this.fnX;
      this.y = this.fnY;
    }
  }
}

export { Vector }
