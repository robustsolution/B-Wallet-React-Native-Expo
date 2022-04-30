import { View, Text } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { SIZES } from "../constants/Assets";
import styles from "../styles";
import Layout from "../constants/Layout";
import WalletAssets from "./WalletTokens";
import WalletTransactions from "./WalletTransactions";
import Colors from "../constants/Colors";

const ROUTES = [
  { key: "tokens", title: "Tokens" },
  { key: "transactions", title: "Transactions" },
];

const renderScene = SceneMap({
  tokens: WalletAssets,
  transactions: WalletTransactions,
});

const HomeTabs = () => {
  const [index, setIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: SIZES.p20,
        paddingVertical: SIZES.p30,
        marginTop: SIZES.extraLarge,
        borderTopLeftRadius: SIZES.p40,
        borderTopRightRadius: SIZES.p40,
      }}
    >
      <TabView
        navigationState={{ index, routes: ROUTES }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Layout.window.width }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={{
              backgroundColor: Colors.gray,
              borderRadius: SIZES.base,
              marginBottom: SIZES.p15,
            }}
            indicatorStyle={{
              backgroundColor: styles.primaryColor.color,
              height: "100%",
              borderRadius: SIZES.base,
            }}
            indicatorContainerStyle={{
              position: "absolute",
              top: 5,
              bottom: 5,
              left: index !== 0 ? -5 : 5,
            }}
            renderLabel={({ route: { title } }) => (
              <Text
                style={{
                  color: styles.primaryColor.backgroundColor,
                  fontWeight: "500",
                }}
              >
                {title}
              </Text>
            )}
          />
        )}
      />
    </View>
  );
};

export default HomeTabs;
