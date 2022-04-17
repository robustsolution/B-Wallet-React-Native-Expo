import { atom } from "recoil";

export const TradingTabState = atom<number>({
  key: "tradingTabState",
  default: 0,
});
