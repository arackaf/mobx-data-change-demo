import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { action, observable, computed, observe } from "mobx";

import ExampleA from "./exampleA";
import ExampleB from "./exampleB";

//const store = new ExampleA();

class WithMap {
  @observable map = new Map([]);
  i = 1;
  add = () => (this.map.set(this.i + "", this.i), this.i++);

  @observable foo = {};

  constructor() {
    observe(this, "foo", props => {
      debugger;
    });

    setTimeout(() => (this.foo.blah = 12), 1000);
    setTimeout(() => alert(this.foo.blah), 1010);
  }
}

let store = new WithMap();

@observer
export default class Main extends Component {
  render() {
    return (
      <div>
        {[...store.map].map(([k, v]) => (
          <span>
            {k} {v}
          </span>
        ))}
        <button onClick={store.add}>Add</button>
      </div>
    );
  }
}

render(<Main store={store} />, document.getElementById("target"));
