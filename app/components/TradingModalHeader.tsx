import { View, Text, TouchableOpacity, Animated } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import COLORS from "../constants/Colors";
import { FONTS, Opacity, SIZES } from "../constants/Assets";
import { TradingTabState } from "../atoms";
import { useNavigation } from "@react-navigation/native";

const ROUTES = [
  { title: "Swap", key: "trade" },
  { title: "Exchange", key: "exchange" },
];

const TradingModalHeader = () => {
  const navigation = useNavigation();
  const [tabIndex, setTabIndex] = useRecoilState(TradingTabState);

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        height: 60,
        paddingHorizontal: SIZES.p20,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
            width: "100%",
          }}
        >
          <View
            style={{
              backgroundColor: Opacity.opacity2,
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "space-between",
              padding: 4,
              borderRadius: SIZES.p6,
            }}
          >
            {ROUTES.map(({ key, title }, position) => (
              <TouchableOpacity
                key={key}
                onPress={() => setTabIndex(position)}
                style={{
                  backgroundColor:
                    position === tabIndex ? COLORS.primary : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: position === 0 ? SIZES.base : 0,
                  padding: SIZES.p6,
                  width: 90,
                  borderRadius: SIZES.p6,
                }}
              >
                <Animated.Text
                  style={{
                    fontSize: SIZES.font,
                    color: COLORS.white,
                    fontFamily: FONTS.medium,
                    opacity: position === tabIndex ? 1 : 0.6,
                  }}
                >
                  {title}
                </Animated.Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.white,
              fontFamily: FONTS.medium,
              alignItems: "flex-end",
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TradingModalHeader;
