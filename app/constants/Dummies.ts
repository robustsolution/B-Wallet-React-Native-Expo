import { IToken } from "types";
import { Images } from "./Assets";

export const USER_DATA = {
  username: "@satoshi",
  amount: "238,894.89",
  currency: "US",
  address: "0x78438js5438504ks034z495",
};

export const TOKENS: IToken[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: Images.Bitcoin,
    rate: 2.45,
    priceUSD: 40432.48,
    status: "I",
    balance: 0,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: Images.Ethereum,
    rate: 5.5,
    priceUSD: 3029.53,
    status: "I",
    balance: 0,
  },
  {
    id: 3,
    name: "Binance",
    symbol: "BSC",
    icon: Images.Binance,
    rate: 3.45,
    priceUSD: 416.58,
    status: "I",
    balance: 0,
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    icon: Images.Polygon,
    rate: 1.3,
    priceUSD: 416.58,
    status: "D",
    balance: 0,
  },
];
