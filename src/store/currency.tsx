import {makeAutoObservable, computed, action, observable} from "mobx";
import {ICoin} from "../interfacece";

class StoreCurrency {
  @observable public currency: ICoin[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  getCarrencyFromApi(payload: ICoin[]) {
    this.currency.push(...payload);
  }

  @computed
  returnListCurrency() {
    if (this.currency.length > 0) {
      const list: string[] = this.currency.map((coin) => coin["name"]);
      list.unshift(" ");
      return list;
    } else {
      throw Error("список пуст");
    }
  }
}

export default new StoreCurrency();
