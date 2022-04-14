import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: {
            screens: {
              Home: "home",
            },
          },
          TradeTab: {
            screens: {
              Trade: "trade",
            },
          },
          ProfileTab: {
            screens: {
              Profile: "profile",
            },
          },
        },
      },
      Onboarding: "Onboarding",
    },
  },
};

export default linking;
