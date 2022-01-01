import {makeAutoObservable, computed, action, observable} from "mobx";
import {ICoin} from "../interfacece";

class StoreCurrency {
  @observable public currency: ICoin[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async getCarrencyFromApi  () {
    try {
      const data = await fetch(
        "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD"
      );
      const {Data} = await data.json();
      const coins: ICoin[] = Data.map((coin: any) => {
        const obj: ICoin = {
          name: coin.CoinInfo.Name,
          fullName: coin.CoinInfo.FullName,
          imageUrl: `https://cryptocompare.com${coin.CoinInfo.ImageUrl}`,
          price: coin.RAW.USD.PRICE.toFixed(2),
          volume24hour: coin.RAW.USD.VOLUME24HOUR.toFixed(2),
        };
        return obj;
      });
      this.currency=[...coins];
    } catch (e) {
      console.log("---e", e);
      return e;
    }
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
