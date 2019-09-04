class TextBar {
  title: string;
  text: string;
  percentage: number; // 0 - 1
  constructor(init: TextBar) {
    Object.assign(this, init);
  }
}
export { TextBar };
