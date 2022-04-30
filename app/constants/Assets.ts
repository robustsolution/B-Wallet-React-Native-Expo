import { IWalletTab } from "types";

const Wallet = require("../assets/images/wallet.png");
const Bitcoin = require("../assets/images/bitcoin.png");
const Ethereum = require("../assets/images/ethereum.png");
const Binance = require("../assets/images/binance.png");
const Polygon = require("../assets/images/polygon.png");

export const IMAGES = {
  Wallet,
  Bitcoin,
  Ethereum,
  Binance,
  Polygon,
};

const elevationNone = {
  shadowColor: "#000",
  shadowOffset: {
    height: 4,
    width: 0,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
};

export const SHADOWS = {
  shadow8: {
    ...elevationNone,
    elevation: 8,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4.65,
    elevation: 4,
  },
  elevation0: {
    ...elevationNone,
  },
};

export const SIZES = {
  p50: 50,
  p40: 40,
  p30: 30,
  p20: 20,
  p15: 15,
  p6: 6,
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
  half: "50%",
  full: "100%",
};

export const FONTS = {
  light: "IBMPlexSansLight",
  regular: "IBMPlexSansRegular",
  medium: "IBMPlexSansMedium",
  semibold: "IBMPlexSansSemiBold",
  bold: "IBMPlexSansBold",
  monoLight: "IBMPlexMonoLight",
  monoRegular: "IBMPlexMonoRegular",
  monoMedium: "IBMPlexMonoMedium",
  monoBold: "IBMPlexMonoBold",
};

export const Opacity = {
  opacity2: "rgba(0,0,0, 0.2)",
};

export const WALLET_TOP_TABS: IWalletTab[] = [
  { title: "Send", id: 1, route: "Send" },
  { title: "Receive", id: 2, route: "Receive" },
  { title: "Trade", id: 3, route: "Trade" },
];
