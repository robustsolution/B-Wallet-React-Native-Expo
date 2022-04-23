import { IToken, ITransaction, IUser, TChains } from "types";
import { IMAGES } from "./Assets";

export const USER_DATA: IUser = {
  username: "@satoshi",
  amount: 2,
  token: "Bitcoin",
  address: "0xE21603B45E2675fFeB9f20EED098e268219508CB",
};

/**
 * The currency price in USD is based on the price grabbed on Google on 16 Apr 2022 at around 6PM
 */
export const TOKENS: Record<TChains, IToken> = {
  Bitcoin: {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    icon: IMAGES.Bitcoin,
    rate: 2.45,
    priceUSD: 40455.1,
    status: "I",
    balance: 0,
    defaultSwapChain: "Binance",
  },
  Ethereum: {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    icon: IMAGES.Ethereum,
    rate: 5.5,
    priceUSD: 3050.78,
    status: "D",
    balance: 0,
    defaultSwapChain: "Bitcoin",
  },
  Binance: {
    id: 3,
    name: "Binance",
    symbol: "BSC",
    icon: IMAGES.Binance,
    rate: 3.45,
    priceUSD: 416.58,
    status: "I",
    balance: 0,
    defaultSwapChain: "Polygon",
  },
  Polygon: {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    icon: IMAGES.Polygon,
    rate: 1.3,
    priceUSD: 1.39,
    status: "D",
    balance: 0,
    defaultSwapChain: "Ethereum",
  },
};

export const TRANSACTIONS: ITransaction[] = [
  {
    id: 1,
    type: "stake",
    amount: 0,
    token: "Binance",
    date: "2022/04/16",
  },
  {
    id: 2,
    type: "swap",
    amount: 100,
    from: "Ethereum",
    to: "Polygon",
    date: "2022/03/30",
  },
  {
    id: 12,
    type: "buy",
    amount: 100,
    token: "Polygon",
    date: "2021/03/30",
  },
];
