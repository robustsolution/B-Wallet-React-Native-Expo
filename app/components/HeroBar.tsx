import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  FONTS,
  Opacity,
  SHADOWS,
  SIZES,
  WALLET_TOP_TABS,
} from "../constants/Assets";
import styles from "../styles";
import Vector from "../assets/vectors";
import { USER_DATA } from "../constants/Dummies";
import { convertTokenToDollars, truncate } from "../helpers";
import Colors from "../constants/Colors";
import TokenSelector from "./TokenSelector";
import { useRecoilValue } from "recoil";
import { CurrentTokenState } from "../atoms";

const HeroBar = () => {
  const [showAmount, setShowAmount] = useState(true);
  const currentToken = useRecoilValue(CurrentTokenState);

  const navigation = useNavigation();

  const onToggleAmount = () => {
    setShowAmount((state) => !state);
  };

  return (
    <View>
      <View
        style={{
          height: 320,
          ...styles.primaryColor,
          paddingHorizontal: SIZES.p20,
          paddingTop: SIZES.p6,
        }}
      >
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 10,
              zIndex: 10,
            }}
          >
            <TokenSelector />
            <TouchableOpacity style={{ alignItems: "flex-end" }}>
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: Opacity.opacity2,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Vector
                  as="ionicons"
                  name="scan"
                  size={24}
                  color={styles.primaryColor.color}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: SIZES.p15,
            }}
          >
            <Text
              style={{
                color: styles.primaryColor.color,
                fontFamily: FONTS.regular,
                fontSize: SIZES.medium,
              }}
            >
              {USER_DATA.username}
            </Text>

            <View
              style={{
                minWidth: "50%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: styles.primaryColor.color,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginVertical: SIZES.p15,
                  flex: 1,
                  textAlign: "center",
                  fontFamily: FONTS.monoBold,
                }}
              >
                {showAmount
                  ? `US ${convertTokenToDollars(
                      USER_DATA.amount,
                      currentToken.name
                    )}`
                  : "******"}
              </Text>

              <TouchableOpacity onPress={onToggleAmount}>
                <Vector
                  as="feather"
                  name={showAmount ? "eye-off" : "eye"}
                  size={16}
                  color={styles.primaryColor.color}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                padding: 6,
                paddingHorizontal: 12,
                ...styles.secondaryColor,
                borderRadius: 100,
              }}
            >
              <Text style={{ fontFamily: FONTS.regular }}>
                {truncate(USER_DATA.address)}
              </Text>
            </View>
          </View>

          <View
            style={{
              bottom: -50,
              height: 60,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: SIZES.p6,
              ...SHADOWS.shadow,
            }}
          >
            {WALLET_TOP_TABS.map((tab, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  height: "60%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderLeftWidth: index !== 0 ? 0.5 : 0,
                  borderColor: "rgba(196, 196, 196, 0.54)",
                  paddingLeft: index !== 0 ? 20 : 0,
                }}
                onPress={() => navigation.navigate(tab.route)}
              >
                <Text
                  style={{
                    fontFamily: FONTS.medium,
                    fontSize: SIZES.medium,
                    color: Colors.primary,
                  }}
                >
                  {tab.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HeroBar;
