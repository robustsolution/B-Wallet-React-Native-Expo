import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { TOKENS } from "../constants/Dummies";
import { IToken } from "types";
import { FONTS, SHADOWS, SIZES } from "../constants/Assets";
import Colors from "../constants/Colors";

const TokenCard = ({ item }: { item: IToken }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 70,
          justifyContent: "center",
          alignItems: "center",
          marginRight: SIZES.p15,
          marginLeft: 5,
          ...SHADOWS.shadow8,
        }}
      >
        <Image source={item.icon} style={{ width: "100%", height: "100%" }} />
      </View>
      <View style={{ width: "100%", flex: 1, alignSelf: "flex-start" }}>
        <Text
          style={{
            fontFamily: FONTS.semibold,
            fontWeight: "500",
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          {item.name}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: FONTS.monoRegular,
              fontSize: 16,
              color: Colors.black50,
              marginRight: 10,
            }}
          >
            ${item.priceUSD}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.monoRegular,
              fontSize: 16,
              color: Colors.green,
            }}
          >
            +{item.rate}%
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontFamily: FONTS.monoBold,
            fontWeight: "500",
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          {item.balance} {item.symbol}
        </Text>
      </View>
    </View>
  );
};

const WalletTokens = () => {
  return (
    <FlatList
      data={TOKENS}
      renderItem={TokenCard}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => `${id}`}
    />
  );
};

export default WalletTokens;
