import { View } from "react-native";
import React from "react";
import HeroBar from "../components/HeroBar";
import HomeTabs from "../components/HomeTabs";

const Home = () => {
  return (
    <View>
      <HeroBar />
      <HomeTabs />
    </View>
  );
};

export default Home;
