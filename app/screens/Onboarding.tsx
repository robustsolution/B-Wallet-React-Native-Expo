import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import AppStatusBar from "../components/AppStatusBar";
import { Images } from "../constants/Assets";
import { useNavigation } from "@react-navigation/native";
import Vector from "../assets/vectors";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary.background,
    color: Colors.primary.text,
    flex: 1,
    padding: 20,
  },
  startButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Colors.secondary.background,
    borderRadius: 30,
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
  },
  startIcon: {
    height: 35,
    width: 35,
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.tertiary.background,
  },
});
