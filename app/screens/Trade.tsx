import { View, Text } from "react-native";
import React from "react";
import { SIZES } from "../constants/Assets";
import { useRecoilValue } from "recoil";
import { TradingTabState } from "../atoms";
import Swap from "./Swap";
import Exchange from "./Exchange";

const Trade = () => {
  const tradingTab = useRecoilValue(TradingTabState);

  if (tradingTab === 1) {
    return <Exchange />;
  }

  return <Swap />;
};

export default Trade;
