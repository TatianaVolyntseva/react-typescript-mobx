export interface ICoin {
  name: string;
  fullName: string;
  price: number;
  volume24hour: number;
  imageUrl: string;
}

export interface ConvertorAppProps {
  listCurrency: string[]
}
