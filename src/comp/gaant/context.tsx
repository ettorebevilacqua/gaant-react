import React from "react";
import { createContextStore } from "../../util/react-context-observable";

export const gridStore = (list: any[]) =>
  createContextStore({
    data: {
      list
    },
    methods: {
      addExample(example: any) {
        this.data.list = [...this.data.list, example];
      },
      fetchExample(id: number | string) {
        fetch(`https://example.com/examples/${id}`)
          .then((response) => response.json())
          .then((example) => this.methods.addExample(example));
      },
      removeExample(id: number | string) {
        this.data.list = this.data.list.filter(
          (example: any) => example.id !== id
        );
      },
      setList(newList: any[]) {
        this.data.list = [...newList];
      },
      update(id: any, value: any) {
        console.log("sssss", this.data.list);
        const idx = this.data.list.findIndex((el: any) => el.id === id);
        if (idx > -1) this.data.list[idx].title = value;
      }
    }
  });

const gridContext = React.createContext(gridStore);

export const { Consumer, Provider } = gridContext;
export default gridContext;
