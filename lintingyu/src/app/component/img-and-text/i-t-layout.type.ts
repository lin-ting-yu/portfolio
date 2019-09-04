class ITLayout {
  layout: string;
  layoutType?: number;
  imgs: Array<string>;
  title?: string;
  text?: string;
  constructor(init: ITLayout) {
    Object.assign(this, init);
  }
}
export { ITLayout };
