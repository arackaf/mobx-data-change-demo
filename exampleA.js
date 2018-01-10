import { action, observable, computed, autorun } from "mobx";
import ajaxUtil from "./ajaxUtil";

export default class {
  @observable propA = 0;
  @observable propB = 0;
  @observable propC = 0;
  @observable messages = [];

  clear = () => this.messages.clear();

  @computed
  get sum() {
    return this.propA + this.propB + this.propC;
  }

  bumpA = () => this.propA++;
  bumpB = () => this.propB++;
  bumpAandB = () => {
    this.propA++;
    this.propB++;
  };

  constructor() {
    autorun(() => {
      this.messages.push("autorun started");

      let a = this.propA;
      let b = this.propB;
      let c = this.propC;
      let sum = this.sum;

      this.messages.push([a, b, c, sum].join(" "));
      this.messages.push("autorun finished");
    });
  }
}
