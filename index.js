import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { action, observable, computed } from "mobx";

import ExampleA from "./exampleA";

const store = new ExampleA();

@observer
export default class Main extends Component {
  @observable
  render() {
    let { store } = this.props;
    return (
      <div>
        <button>Run it</button>
        <div>
          <ul>{store.messages.map(s => <li>{s}</li>)}</ul>
        </div>
      </div>
    );
  }
}

render(<Main store={store} />, document.getElementById("target"));
