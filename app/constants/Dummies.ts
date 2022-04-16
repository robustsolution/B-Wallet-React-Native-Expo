import { IToken, ITransaction } from "types";
import { IMAGES } from "./Assets";

export const USER_DATA = {
  username: "@satoshi",
  amount: "238,894.89",
  currency: "US",
  address: "0xE21603B45E2675fFeB9f20EED098e268219508CB",
};

export const TOKENS: IToken[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: IMAGES.Bitcoin,
    rate: 2.45,
    priceUSD: 40432.48,
    status: "I",
    balance: 0,
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: IMAGES.Ethereum,
    rate: 5.5,
    priceUSD: 3029.53,
    status: "D",
    balance: 0,
  },
  {
    id: 3,
    name: "Binance",
    symbol: "BSC",
    icon: IMAGES.Binance,
    rate: 3.45,
    priceUSD: 416.58,
    status: "I",
    balance: 0,
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    icon: IMAGES.Polygon,
    rate: 1.3,
    priceUSD: 416.58,
    status: "D",
    balance: 0,
  },
];

export const TRANSACTIONS: ITransaction[] = [
  {
    id: 1,
    type: "stake",
    amount: 0,
    token: {
      name: "Binance",
      symbol: "BSC",
      icon: IMAGES.Binance,
    },
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "2-digit",
    }),
  },
  {
    id: 2,
    type: "swap",
    amount: 100,
    token: {
      name: "Ethereum",
      symbol: "ETH",
      icon: IMAGES.Ethereum,
    },
    destination: {
      name: "Polygon",
      symbol: "BSC",
      icon: IMAGES.Polygon,
      balance: 0.1,
    },
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "2-digit",
    }),
  },
];
