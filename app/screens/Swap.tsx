import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SIZES, FONTS } from "../constants/Assets";
import COLORS from "../constants/Colors";
import TokenSelector from "../components/TokenSelector";
import Vector from "../assets/vectors";
import { convertTokenToDollars } from "../helpers";
import { TChains } from "types";

const SwapItem = () => {
  const [value, setValue] = useState("");
  const [selectedToken, setSelectedToken] = useState<TChains | null>(null);

  return (
    <View
      style={{
        paddingVertical: SIZES.extraLarge,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 3,
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
          style={{
            width: SIZES.half,
            borderColor: COLORS.gray10,
            borderRadius: 100,
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

const Swap = () => {
  return (
    <View>
      <View
        style={{
          margin: SIZES.p20,
          backgroundColor: COLORS.white,
          borderRadius: SIZES.small,
          borderWidth: 1,
          borderColor: COLORS.gray10,
        }}
      >
        <SwapItem />

        <View style={{ marginVertical: SIZES.large, position: "relative" }}>
          <View
            style={{
              height: 1,
              width: SIZES.full,
              backgroundColor: COLORS.gray10,
            }}
          />
          <TouchableOpacity
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
          </TouchableOpacity>
        </View>

        <SwapItem />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          marginHorizontal: SIZES.p20,
          padding: SIZES.p15,
          borderRadius: SIZES.small,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: COLORS.white,
            fontFamily: FONTS.semibold,
            fontSize: SIZES.font,
          }}
        >
          Swap
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Swap;
