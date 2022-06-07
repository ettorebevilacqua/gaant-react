export interface ICell {
  width?: number;
  height?: number;
  padding?: { top: number; left: number; botton: number; right: number };
  margin?: { top: number; left: number; botton: number; right: number };
  flex?: string;
  other?: any;
}

export interface IElemCanvas {
  props?: ICell;
  render?: () => void;
}

export interface IRowCanvas extends IElemCanvas {
  cols: IElemCanvas[];
}

export interface IGridCanvas extends IElemCanvas {
  data: any;
  cols?: any;
  rows?: IRowCanvas[];
  defaultCell?: ICell;
  header?: IRowCanvas[];
  footer?: IRowCanvas[];
  left?: IRowCanvas[];
  right?: IRowCanvas[];
}

export interface IGridOptions extends IElemCanvas {
  numCol: number;
  numRows: number;
  box: ICell;
  cell?: ICell;
}
