import { Stage, Layer, Rect, Circle, Text } from "react-konva";
import useFakeEvent from "../useFakeEvent";
const marginSize = 50;

interface Point {
  x: number;
  y: number;
}

interface RowProps {
  lenCell: number;
  size: Point;
  list: Array<any>;
  startPos: { x: number; y: number };
  RenderCell: any;
  // other?: any;
}

export const RenderRow = ({
  lenCell,
  size,
  RenderCell,
  list,
  startPos
}: RowProps) => {
  const [] = useFakeEvent();
  const fullSize = size || {
    w: window.innerWidth - marginSize,
    h: window.innerWidth - marginSize
  };

  const cellSize = fullSize.x / lenCell;
  const nextXPos = (cellNum: number) => startPos.x + cellNum * cellSize;
  const Cell = RenderCell;
  // const list = new Array(10).fill(0).reduce(countReduce, []);
  const renderRects = () =>
    list.map((data: any, cellNum: number) => {
      // console.log("sssx", cellNum);

      return (
        <Cell
          data={data}
          x={nextXPos(cellNum)}
          y={startPos.y}
          width={cellSize}
        />
      );
    });
  return <>{renderRects()}</>;
};
