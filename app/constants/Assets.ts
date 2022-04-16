const Wallet = require("../assets/images/wallet.png");
const Bitcoin = require("../assets/images/bitcoin.png");
const Ethereum = require("../assets/images/ethereum.png");
const Binance = require("../assets/images/binance.png");
const Polygon = require("../assets/images/polygon.png");

export const Images = {
  Wallet,
  Bitcoin,
  Ethereum,
  Binance,
  Polygon,
};

export const Shadows = {
  shadow8: {
    shadowColor: "#000",
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
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
};

export const Sizes = {
  p20: 20,
  p15: 15,
  p6: 6,
};

export const Opacity = {
  opacity2: "rgba(0,0,0, 0.2)",
};

export const WALLET_TOP_TABS = [
  { title: "Send", id: 1 },
  { title: "Receive", id: 2 },
  { title: "Trade", id: 3 },
];
