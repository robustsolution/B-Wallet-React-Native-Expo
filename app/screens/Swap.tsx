import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { SIZES, FONTS } from "../constants/Assets";
import COLORS from "../constants/Colors";
import TokenSelector from "../components/TokenSelector";
import Vector from "../assets/vectors";
import { convertTokenToDollars } from "../helpers";
import { TChains } from "types";
import { useRecoilValue } from "recoil";
import { CurrentTokenState } from "../atoms";
import styles from "../styles";
import TouchableText from "../components/TouchableText";

const SwapItem = ({ defaultChain }: { defaultChain?: TChains }) => {
  const [value, setValue] = useState("");
  const [selectedToken, setSelectedToken] = useState<TChains | null>(null);

  return (
    <View
      style={{
        zIndex: 3000,
        paddingVertical: SIZES.extraLarge,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 5,
          width: SIZES.full,
          paddingHorizontal: SIZES.p20,
        }}
      >
        <View style={{ width: SIZES.half }}>
          <TextInput
            keyboardType="numeric"
            placeholder="0.00"
            style={{
              fontFamily: FONTS.monoBold,
              fontSize: SIZES.large,
              paddingRight: SIZES.extraLarge,
            }}
            value={value}
            onChange={({ nativeEvent: { text } }) => setValue(text)}
          />
        </View>
        <TokenSelector
          defaultValue={defaultChain}
          style={{
            width: SIZES.half,
            borderColor: COLORS.gray10,
            borderRadius: 100,
          }}
          dropDownContainerStyle={{
            width: "50%",
            borderWidth: 0,
            marginTop: 10,
            borderColor: COLORS.gray10,
          }}
          onChange={setSelectedToken}
        />
      </View>
      <View
        style={{
          marginTop: 3,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: SIZES.p20,
        }}
      >
        <Vector
          as="materialCI"
          name="approximately-equal"
          size={16}
          color={COLORS.black50}
        />
        <Text style={{ fontFamily: FONTS.monoLight, color: COLORS.black50 }}>
          ${convertTokenToDollars(+value, selectedToken as TChains)}
        </Text>
      </View>
    </View>
  );
};

const Swap = ({ style }: { style?: ViewStyle }) => {
  const currentToken = useRecoilValue(CurrentTokenState);

  return (
    <View style={style}>
      <View style={styles.cardMainWrapper}>
        <SwapItem />

        <View style={{ marginVertical: SIZES.large, position: "relative" }}>
          <View
            style={{
              height: 0.75,
              width: SIZES.full,
              backgroundColor: COLORS.gray10,
            }}
          />
          <Pressable
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: COLORS.gray10,
              backgroundColor: COLORS.white,
              position: "absolute",
              right: SIZES.extraLarge,
              top: -20,
            }}
          >
            <Vector
              name="exchange"
              size={16}
              color={COLORS.black50}
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </Pressable>
        </View>

        <SwapItem
          defaultChain={
            currentToken.defaultSwapChain
              ? currentToken.defaultSwapChain
              : undefined
          }
        />
      </View>

      <TouchableText
        text="Swap"
        style={styles.primaryButtonView}
        textStyle={styles.primaryButtonText}
      />
    </View>
  );
};

export default Swap;
