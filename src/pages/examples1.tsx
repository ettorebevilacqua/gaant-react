import { Stage, Layer, Rect, Circle, Text } from "react-konva";
import { RenderRow } from "../comp/gaant/row";
const marginSize = 50;
export const Example1 = () => {
  const lenCell = 10;
  const height = 30;
  const fullSize = {
    x: window.innerWidth - marginSize,
    y: window.innerWidth - marginSize
  };

  const getCellSize = () => fullSize.w / lenCell;
  const startPos = { x: 10, y: 10 };
  const nextXPos = (cellNum: number) => startPos.x + cellNum * getCellSize();
  const countReduce = (acc: number[]) => [...acc, acc.length];

  const list = new Array(10).fill(0).reduce(countReduce, []);
  const RenderCell = (props: any) => {
    console.log("xxxx y", props.data);
    return (
      <>
        <Rect
          fill="yellow"
          shadowBlur={4}
          stroke={"red"}
          strokeWidth={2}
          height={height}
          {...props}
        />
        {!props.data ? (
          <></>
        ) : (
          <Text
            text={props.data}
            fontSize={30}
            fill="yellow"
            align={props.align || "center"}
            shadowBlur={4}
            stroke={"red"}
            strokeWidth={2}
            height={height}
            {...props}
          />
        )}
      </>
    );
  };
  const renderRects = () =>
    list.map((_: any, cellNum: number) => {
      // console.log("sssx", cellNum);

      return (
        <Rect
          x={nextXPos(cellNum)}
          y={startPos.y}
          width={getCellSize()}
          height={height}
          fill="red"
          shadowBlur={4}
          stroke={"black"}
          strokeWidth={2}
          RenderCell={RenderCell}
        />
      );
    });
  return (
    // Stage - is a div wrapper
    // Layer - is an actual 2d canvas element, so you can have several layers inside the stage
    // Rect and Circle are not DOM elements. They are 2d shapes on canvas
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect width={50} height={50} fill="black" />
        <Circle x={200} y={200} stroke="black" radius={50} />
        <Text text="Some text on canvas" fontSize={15} />
        <RenderRow
          list={list}
          startPos={{ x: 10, y: 60 }}
          lenCell={lenCell}
          size={fullSize}
          RenderCell={RenderCell}
        />
      </Layer>
    </Stage>
  );
};
