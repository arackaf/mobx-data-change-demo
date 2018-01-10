import { action, observable, computed, autorun, observe } from "mobx";
import ajaxUtil from "./ajaxUtil";
import throttle from "lodash.throttle";

export default class {
  @observable propA = 0;
  @observable propB = 0;
  @observable messages = [];

  clear = () => this.messages.clear();

  @computed
  get sum() {
    return this.propA + this.propB + this.propC;
  }

  bumpA = () => this.propA++;
  @action
  bumpATwice = () => {
    this.propA++;
    this.propA++;
  };

  constructor() {
    observe(this, "propA", ({ name, oldValue, newValue }) => {
      this.messages.push("observe propA started");

      this.messages.push([name, oldValue, newValue].join(" "));
      this.messages.push("observe propA finished");
    });
  }
}
