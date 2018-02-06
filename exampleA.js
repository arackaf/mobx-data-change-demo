import { action, observable, computed, autorun, runInAction } from "mobx";
import ajaxUtil from "./ajaxUtil";

let i = 0;

export default class {
  @observable propA = 0;
  @observable propB = 0;
  @observable messages = [];

  @observable runs = 0;

  clear = () => this.messages.clear();

  @computed
  get sum() {
    return this.propA + this.propB;
  }

  bumpA = () => this.propA++;
  bumpB = () => this.propB++;
  bumpAandB = () => {
    this.propA++;
    this.propB++;
  };

  constructor() {
    //Track the READS
    autorun(() => {
      this.messages.push("autorun started");

      let a = this.propA;
      let b = this.propB;
      let sum = this.sum;

      this.messages.push([a, b, sum].join(" "));
      this.messages.push("autorun finished");
    });
  }
}
