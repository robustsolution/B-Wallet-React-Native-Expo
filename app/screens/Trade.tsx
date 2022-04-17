import { View, Text, Animated } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { TradingTabState } from "../atoms";
import Swap from "./Swap";
import Exchange from "./Exchange";

const Trade = () => {
  const tradingTab = useRecoilValue(TradingTabState);

  return (
    <Animated.View>
      <Swap style={{ display: tradingTab === 0 ? "flex" : "none" }} />
      <Exchange style={{ display: tradingTab === 1 ? "flex" : "none" }} />
    </Animated.View>
  );
};

export default Trade;
