import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { action, observable, computed, observe } from "mobx";

import ExampleA from "./exampleA";
import ExampleB from "./exampleB";

//const store = new ExampleA();

let alphabet = [..."abcdefghijklmnopqrstuvwxyz"];

class WithObject {
  @observable.ref obj = {};
  i = 0;
  add = () => {
    let newLetter = alphabet[this.i++];
    this.obj = { ...this.obj, [newLetter]: `Letter: ${newLetter}` };
    debugger;
  };
}

let store = new WithObject();

@observer
export default class Main extends Component {
  render() {
    return (
      <div>
        <button onClick={store.add}>Add</button>
        {Object.entries(store.obj).map(([k, v]) => (
          <div>
            {k} {v}
          </div>
        ))}
      </div>
    );
  }
}

render(<Main store={store} />, document.getElementById("target"));
