import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Opacity, Shadows, Sizes, WALLET_TOP_TABS } from "../constants/Assets";
import styles from "../styles";
import Vector from "../assets/vectors";
import { USER_DATA } from "../constants/Dummies";
import { truncate } from "../helpers";

const HeroBar = () => {
  const [showAmount, setShowAmount] = useState(true);

  const onToggleAmount = () => {
    setShowAmount((state) => !state);
  };

  return (
    <View style={{ flex: 1, paddingBottom: 130 }}>
      <View
        style={{
          height: 300,
          ...styles.primaryColor,
          paddingHorizontal: Sizes.p20,
          paddingTop: Sizes.p6,
        }}
      >
        <SafeAreaView>
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity>
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
              marginTop: Sizes.p6,
            }}
          >
            <Text
              style={{
                color: styles.primaryColor.color,
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
                  marginVertical: Sizes.p15,
                  flex: 1,
                  textAlign: "center",
                }}
              >
                {showAmount
                  ? `${USER_DATA.currency} ${USER_DATA.amount}`
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
              <Text>{truncate(USER_DATA.address)}</Text>
            </View>
          </View>

          <View
            style={{
              bottom: -60,
              height: 70,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#fff",
              borderRadius: Sizes.p6,
              ...Shadows.shadow,
            }}
          >
            {WALLET_TOP_TABS.map((tab, index) => (
              <View
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
              >
                <Text>{tab.title}</Text>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default HeroBar;
