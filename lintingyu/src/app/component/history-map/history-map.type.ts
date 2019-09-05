class HistoryMapItem {
  type: string;
  title: string;
  text?: string;
  constructor(init: HistoryMapItem) {
    Object.assign(this, init);
  }
}
export { HistoryMapItem };
