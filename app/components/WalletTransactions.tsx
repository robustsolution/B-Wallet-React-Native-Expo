import { View, Text, FlatList, Image, TextProps } from "react-native";
import React from "react";
import { TOKENS, TRANSACTIONS } from "../constants/Dummies";
import styles from "../styles";
import { ITransaction, TActivity, TChains } from "types";
import { FONTS, SHADOWS, SIZES } from "../constants/Assets";
import Vector from "../assets/vectors";
import Colors from "../constants/Colors";
import { dateFormat, convertTokenToDollars } from "../helpers";

interface IProps {
  item: ITransaction;
}

const TransactionIcon = ({
  type,
  token,
  destination,
}: {
  type: TActivity;
  token?: TChains;
  destination?: TChains;
}) => {
  if (type === "swap" && token && destination) {
    return (
      <View style={{ flexDirection: "row", position: "relative" }}>
        <Image source={TOKENS[token].icon} style={styles.leadingIcon} />
        <Image
          source={TOKENS[destination].icon}
          style={[
            styles.leadingIcon,
            { position: "absolute", right: -20, top: 10 },
          ]}
        />
      </View>
    );
  }

  if (["stake", "buy", "send"].includes(type) && token) {
    const hasDecreased = ["send", "stake"].includes(type);

    return (
      <View style={{ position: "relative" }}>
        <Image source={TOKENS[token].icon} style={styles.leadingIcon} />
        <View
          style={{
            position: "absolute",
            backgroundColor: hasDecreased ? Colors.red : Colors.green,
            bottom: 0,
            right: 0,
            borderRadius: 20,
          }}
        >
          <Vector
            as="feather"
            name={hasDecreased ? "minus" : "plus"}
            style={{ color: Colors.white }}
            size={18}
          />
        </View>
      </View>
    );
  }

  return (
    <Vector
      as="feather"
      name="activity"
      size={30}
      style={{ color: Colors.black50, borderColor: Colors.black50 }}
    />
  );
};

const TransactionTitle = ({
  type,
  amount,
  token,
  destination,
  style,
}: {
  type: TActivity;
  amount: number;
  token?: TChains;
  destination?: TChains;
} & TextProps) => {
  if (type === "swap" && amount && destination && token) {
    return (
      <Text style={style}>
        Swap {Number(amount).toFixed(2)} {TOKENS[token].symbol} for{" "}
        {Number(TOKENS[destination]?.balance)} {TOKENS[destination].symbol}
      </Text>
    );
  }

  return <Text style={[style, { textTransform: "capitalize" }]}>{type}</Text>;
};

const TransactionCard = ({ item }: IProps) => {
  return (
    <View style={styles.cardWrapper}>
      <View
        style={{
          width: SIZES.p50,
          height: SIZES.p50,
          borderRadius: 70,
          justifyContent: "center",
          alignItems: "center",
          marginRight: SIZES.p15 + 5,
          marginLeft: 9,
          ...SHADOWS.shadow8,
        }}
      >
        <TransactionIcon
          type={item.type}
          token={item.token}
          destination={item.to as TChains}
        />
      </View>
      <View style={{ width: "100%", flex: 1, alignSelf: "flex-start" }}>
        <TransactionTitle
          amount={item.amount || 0}
          type={item.type}
          token={item.token}
          destination={item.to as TChains}
          style={{
            fontFamily: FONTS.semibold,
            fontWeight: "500",
            fontSize: 18,
            marginBottom: 5,
          }}
        />
        <Text style={{ fontFamily: FONTS.monoLight }}>
          {dateFormat(item.date)}
        </Text>
      </View>
      {!["approve", "swap"].includes(item.type) && item.token && (
        <View>
          <Text
            style={{
              fontFamily: FONTS.monoMedium,
              fontSize: SIZES.large,
              marginBottom: 5,
            }}
          >
            {item.amount} {TOKENS[item.token]?.symbol}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.monoLight,
              alignSelf: "flex-end",
            }}
          >
            ${convertTokenToDollars(item.amount || 0, item.token)}
          </Text>
        </View>
      )}
    </View>
  );
};

const WalletTransactions = () => {
  return (
    <FlatList
      data={TRANSACTIONS}
      renderItem={TransactionCard}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => `${id}`}
      contentContainerStyle={{ paddingBottom: SIZES.p50 }}
    />
  );
};

export default WalletTransactions;
