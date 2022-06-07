import { ICell, IGridCanvas, IRowCanvas, IGridOptions } from "./types";
const gridMock = [
  [
    { id: 1, title: "ddd" },
    { id: 2, title: "due" }
  ],
  [{ id: 3, title: "tre" }]
];

const gridOption =(marginSize:number):IGridOptions=>{
  return {
    numCol:0,
    numRows:0,
    box:{
      width: window.innerWidth - marginSize,
      height: window.innerHeight - marginSize
    },
    cell:{
      width: 50,
      height: 30
    }
  }
}

function renderRow(data: any[]): IRowCanvas {
  return {
    render() {
      data.map(()=>);
    }
  };
}

function gridDrawer(data: any[], defaultCell: ElemCell): GridCanvas {
  const rows = data.map(renderRow);
  return {
    rows,
    value: data,
    defaultCell
  };
}
