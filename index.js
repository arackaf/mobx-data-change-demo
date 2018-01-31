import React, { Component } from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { action, observable, computed } from "mobx";

import ExampleA from "./exampleA";
import ExampleB from "./exampleB";

const store = new ExampleA();

@observer
export default class Main extends Component {
  render() {
    let { store } = this.props;
    return (
      <div>
        {store.bumpA ? <button onClick={store.bumpA}>Bump A</button> : null}
        {store.bumpATwice ? <button onClick={store.bumpATwice}>Bump A Twice</button> : null}
        {store.bumpB ? <button onClick={store.bumpB}>Bump B</button> : null}
        {store.bumpAandB ? <button onClick={store.bumpAandB}>Bump A and B</button> : null}
        {store.clear ? <button onClick={store.clear}>Clear</button> : null}
        <span>{store.runs}</span>
        <div>
          <ul>{store.messages.map(s => <li>{s}</li>)}</ul>
        </div>
      </div>
    );
  }
}

render(<Main store={store} />, document.getElementById("target"));
