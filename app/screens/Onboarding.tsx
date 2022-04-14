import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "app/constants/Colors";
import AppStatusBar from "app/components/AppStatusBar";
import { Images, Sizes } from "app/constants/Assets";
import { useNavigation } from "@react-navigation/native";
import Vector from "app/assets/vectors";
import styles from "app/styles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { padding: Sizes.p20 }]}>
      <AppStatusBar backgroundColor="#fff" />
      <View style={{ flex: 1 }}>
        <Image
          source={Images.Wallet}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginVertical: 30 }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            lineHeight: 40,
          }}
        >
          Secure your coins and NFTs with ease.
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 15,
            lineHeight: 25,
            marginVertical: 20,
          }}
        >
          Buy, Sell, Earn digital assets and easily secure your funds.
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Root")}>
        <View style={styles.startButton}>
          <Text style={{ color: Colors.primary.background }}>
            Let's get started
          </Text>

          <View style={styles.startIcon}>
            <Vector as="feather" name="arrow-right" color="#fff" size={18} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
