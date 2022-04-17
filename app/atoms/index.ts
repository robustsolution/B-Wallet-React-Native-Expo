import { IMAGES } from "../constants/Assets";
import { atom } from "recoil";
import { IToken } from "types";

export const TradingTabState = atom<number>({
  key: "tradingTabState",
  default: 0,
});

export const CurrentToken = atom<IToken>({
  key: "currentToken",
  default: {
    name: "Bitcoin",
    symbol: "BTC",
    icon: IMAGES.Bitcoin,
    rate: 2.45,
    priceUSD: 40455.1,
    status: "I",
    balance: 0,
  },
});
