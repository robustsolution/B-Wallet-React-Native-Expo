import React from "react";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarProps } from "expo-status-bar";

const AppStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
};

export default AppStatusBar;
