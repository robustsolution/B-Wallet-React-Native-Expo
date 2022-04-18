import { View, Text, StyleSheet } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import { useRecoilValue } from "recoil";
import { USER_DATA } from "../constants/Dummies";
import { FONTS, SIZES } from "../constants/Assets";
import COLORS from "../constants/Colors";
import TokenSelector from "../components/TokenSelector";
import { CurrentTokenState } from "../atoms";
import Vector from "../assets/vectors";
import styles from "../styles";

const Receive = () => {
  const currentToken = useRecoilValue(CurrentTokenState);

  return (
    <View>
      <View
        style={{
          margin: SIZES.p20,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.gray10,
          padding: SIZES.extraLarge,
          borderRadius: SIZES.base,
          alignItems: "center",
        }}
      >
        <TokenSelector
          style={{ borderColor: COLORS.gray10, marginBottom: SIZES.extraLarge }}
          dropDownContainerStyle={styles.dropdownContainerStyle}
        />

        <View style={{ marginVertical: SIZES.large }}>
          <QRCode value={USER_DATA.address} size={SIZES.extraLarge * 8} />
        </View>

        <Text style={{ textAlign: "center", paddingVertical: SIZES.large }}>
          {USER_DATA.address}
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ fontFamily: FONTS.regular }}>
          Send only {currentToken.name} ({currentToken.symbol}) to this address.
        </Text>
        <Text style={{ fontFamily: FONTS.light }}>
          Sending any other coins may result in permanent loss.
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: SIZES.extraLarge,
        }}
      >
        <View style={innerStyles.iconWrapper}>
          <Vector as="feather" name="copy" style={innerStyles.icon} size={24} />
        </View>
        <View style={innerStyles.iconWrapper}>
          <Vector
            as="feather"
            name="share"
            style={innerStyles.icon}
            size={24}
          />
        </View>
      </View>
    </View>
  );
};

const innerStyles = StyleSheet.create({
  iconWrapper: {
    height: 50,
    width: 50,
    borderRadius: SIZES.extraLarge,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.large,
  },
  icon: {
    padding: SIZES.font,
    color: COLORS.white,
  },
});

export default Receive;
