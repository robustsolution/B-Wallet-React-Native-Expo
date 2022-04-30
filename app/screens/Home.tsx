import { View } from "react-native";
import React from "react";
import HeroBar from "../components/HeroBar";
import HomeTabs from "../components/HomeTabs";
import Layout from "../constants/Layout";

const Home = () => {
  return (
    <View style={{ height: Layout.window.height }}>
      <HeroBar />
      <HomeTabs />
    </View>
  );
};

export default Home;
