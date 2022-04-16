import { View, Text } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { Sizes } from "../constants/Assets";
import styles from "../styles";
import Layout from "../constants/Layout";
import WalletAssets from "./WalletTokens";
import WalletTransactions from "./WalletTransactions";

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
        height: "100%",
        backgroundColor: "#fff",
        padding: Sizes.p20,
        paddingVertical: Sizes.p20 + 10,
        marginTop: 8,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
              backgroundColor: "#f6f6f6",
              borderRadius: Sizes.p6 + 2,
              marginBottom: Sizes.p15,
            }}
            indicatorStyle={{
              backgroundColor: styles.primaryColor.color,
              height: "100%",
              borderRadius: 8,
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
