import StoreConvertor from "./convertor";
import StoreCurrency from "./currency";

const rootStore = {
  // storeCurrency: new StoreCurrency(),
  storeConvertor: new StoreConvertor([]),
};

export default rootStore;
