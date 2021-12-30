import {makeAutoObservable, computed, action, observable} from "mobx";
import {ICoin} from "../interfacece";

class StoreConvertor {

  @observable public converter: ICoin[] = [];

  constructor(initialConverter: ICoin[]) {
    // makeAutoObservable(this);
    this.converter = initialConverter;
  }
  
}

export default StoreConvertor;