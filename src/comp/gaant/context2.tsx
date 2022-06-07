import React from "react";
import { arrayChangeHandler } from "../../util/array";

interface ICell {
  data: string;
}

interface IRow {
  cells: ICell[];
}
interface IGrid {
  rows: IRow[];
}

type ListGrid = any; // Array<Array<any>>;

const ListContext = React.createContext<ListGrid | null>(null);
const ListProvider = ({ children }) => {
  //set bool message to true
  const [cell, setCell] = React.useState<ListGrid>([[]]);
  const setValue = React.useCallback(() => setCell((b) => b), []);
  const on;
  const value = {
    onReportButtonPress,
    onDeleteButtonPress
  };
  return (
    // set value of context to {bool, toggle}
    <ListContext.Provider value={cell}>{children}</ListContext.Provider>
  );
};

const D = () => {
  const { bool, toggle } = React.useContext(ListContext);
  return <button onClick={toggle}>D:{String(bool)}</button>;
};
const C = () => {
  const { bool, toggle } = React.useContext(ListContext);
  return <button onClick={toggle}>C:{String(bool)}</button>;
};
//removed E as it does not do anything to demonstrate context
const B = () => <D />;

const A = () => {
  return (
    <ListProvider>
      <B />
      <C />
    </ListProvider>
  );
};

ReactDOM.render(<A />, document.getElementById("root"));
