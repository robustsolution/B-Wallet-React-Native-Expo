import { atom } from "recoil";
import { IToken } from "types";
import { TOKENS } from "../constants/Dummies";

export const TradingTabState = atom<number>({
  key: "tradingTabState",
  default: 0,
});

export const CurrentTokenState = atom<IToken>({
  key: "currentTokenState",
  default: TOKENS.Bitcoin,
});
