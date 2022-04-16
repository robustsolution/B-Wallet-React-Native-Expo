/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ImageSourcePropType } from "react-native";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Home: undefined;
  Onboarding: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeTab: undefined;
  TradeTab: undefined;
  ProfileTab: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type TChains = "Bitcoin" | "Ethereum" | "Binance" | "Polygon";
export type TSymbol = "BTC" | "ETH" | "BSC" | "MATIC";
export type TActivity = "swap" | "buy" | "send" | "stake" | "approve";

export interface IToken {
  id?: number;
  name: TChains;
  symbol: TSymbol;
  icon: ImageSourcePropType;
  rate?: number;
  priceUSD?: number;
  balance?: number;
  status?: "I" | "D";
}

export interface ITransaction {
  id?: number;
  type: TActivity;
  from?: string;
  to?: string;
  amount?: number;
  token: TChains;
  destination?: TChains;
  date: string;
}
