import { action, observable, computed, autorun, runInAction } from "mobx";
import ajaxUtil from "./ajaxUtil";

//Hack workaround for runs #1
let i = 0;

export default class {
  @observable propA = 0;
  @observable propB = 0;
  @observable messages = [];

  //will track total number of times our autorun has run, once it's added to the autorun
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
      //Output a message so we know every time this runs
      this.messages.push("autorun started");

      let a = this.propA;
      let b = this.propB;
      let sum = this.sum;

      this.messages.push([a, b, sum].join(" "));
      this.messages.push("autorun finished");
    });
  }
}
