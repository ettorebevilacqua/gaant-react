import { ContextStoreProvider } from "../../util/react-context-observable";
import gridContext, { Consumer, gridStore } from "./context";

const data = [
  { id: 1, title: "sss" },
  { id: 2, title: "due" }
];

const store = gridStore(data);

const renderElem = (methods: any) => (example: any) => {
  console.log("elem draw", example.id, store.subject);
  return (
    <li key={example.id}>
      {example.title}
      <button onClick={() => methods.removeExample(example.id)}>Remove</button>
      <button onClick={() => methods.update(example.id, "update")}>
        update
      </button>
    </li>
  );
};

const Examples = () => (
  <ul>
    <Consumer>
      {({ data, methods }: any) => data.list.map(renderElem(methods))}
    </Consumer>
  </ul>
);

export const Gaant = () => (
  <ContextStoreProvider context={gridContext} store={store}>
    <Examples />
    <button onClick={() => store.methods.fetchExample(2)}>
      Fetch Example 2
    </button>
  </ContextStoreProvider>
);
