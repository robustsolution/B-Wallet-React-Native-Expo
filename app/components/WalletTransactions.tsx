import {
  View,
  Text,
  FlatList,
  Image,
  ImageSourcePropType,
  TextProps,
} from "react-native";
import React from "react";
import { TRANSACTIONS } from "../constants/Dummies";
import styles from "../styles";
import { IToken, ITransaction, TActivity } from "types";
import { FONTS, SHADOWS, SIZES } from "../constants/Assets";
import Vector from "../assets/vectors";
import Colors from "../constants/Colors";

interface IProps {
  item: ITransaction;
}

const TransactionIcon = ({
  type,
  token,
  destination,
}: {
  type: TActivity;
  token?: IToken;
  destination?: IToken;
}) => {
  if (type === "swap" && token && destination) {
    return (
      <View style={{ flexDirection: "row", position: "relative" }}>
        <Image source={token.icon} style={styles.leadingIcon} />
        <Image
          source={destination.icon}
          style={[
            styles.leadingIcon,
            { position: "absolute", right: -20, top: 10 },
          ]}
        />
      </View>
    );
  }

  if (type === "stake" && token) {
    return (
      <View style={{ position: "relative" }}>
        <Image source={token.icon} style={styles.leadingIcon} />
        <View
          style={{
            position: "absolute",
            backgroundColor: Colors.red,
            bottom: 0,
            right: 0,
            borderRadius: 20,
          }}
        >
          <Vector
            as="feather"
            name="minus"
            style={{ color: Colors.white }}
            size={20}
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
  token?: IToken;
  destination?: IToken;
} & TextProps) => {
  if (type === "swap" && amount) {
    return (
      <Text style={style}>
        Swap {Number(amount).toFixed(2)} {token?.symbol} for{" "}
        {Number(destination?.balance)} {destination?.symbol}
      </Text>
    );
  }

  if (type === "stake") {
    return <Text style={style}>Stake {token?.symbol}</Text>;
  }

  return <Text style={style}>Approve {token?.symbol}</Text>;
};

const TransactionCard = ({ item }: IProps) => {
  return (
    <View style={styles.cardWrapper}>
      <View
        style={{
          width: 50,
          height: 50,
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
          destination={item.destination}
        />
      </View>
      <View style={{ width: "100%", flex: 1, alignSelf: "flex-start" }}>
        <TransactionTitle
          amount={item.amount || 0}
          type={item.type}
          token={item.token}
          destination={item.destination}
          style={{
            fontFamily: FONTS.semibold,
            fontWeight: "500",
            fontSize: 18,
            marginBottom: 5,
          }}
        />
        <Text style={{ fontFamily: FONTS.monoLight }}>{item.date}</Text>
      </View>
      {!["approve", "swap"].includes(item.type) && (
        <View>
          <Text
            style={{
              fontFamily: FONTS.monoMedium,
              fontSize: SIZES.large,
              marginBottom: 5,
            }}
          >
            {item.amount} {item.token?.symbol}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.monoLight,
              alignSelf: "flex-end",
            }}
          >
            ${item.amount}
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
    />
  );
};

export default WalletTransactions;
