import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { ColorSchemeName, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Vector from "../assets/vectors";
import { SHADOWS } from "../constants/Assets";
import { COLOR_SCHEME } from "../constants/Colors";
import Trade from "../screens/Trade";
import TradingModalHeader from "../components/TradingModalHeader";
import Send from "../screens/Send";
import styles from "../styles";
import ModalHeaderRight from "../components/ModalHeaderRight";
import Receive from "../screens/Receive";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />

      <Stack.Group
        screenOptions={{
          headerShown: true,
          presentation: "modal",
          header: () => <TradingModalHeader />,
        }}
      >
        <Stack.Screen name="Trade" component={Trade} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: true,
          presentation: "modal",
          headerStyle: styles.headerStyle,
          headerTitleStyle: { color: Colors.white },
          headerRight: () => <ModalHeaderRight />,
        }}
      >
        <Stack.Screen name="Send" component={Send} />
        <Stack.Screen name="Receive" component={Receive} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarActiveTintColor: COLOR_SCHEME[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={() => ({
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TradeTab"
        component={Home}
        options={({ navigation }) => ({
          title: "Trade",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Trade")}
              style={{
                top: -20,
                height: 70,
                width: 70,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                backgroundColor: Colors.primary,
                ...SHADOWS.shadow8,
              }}
            >
              <Vector
                name="exchange"
                size={20}
                color={Colors.secondary}
                style={{
                  borderWidth: 2,
                  padding: 5,
                  borderColor: Colors.secondary,
                  borderRadius: 8,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>["name"];
  color: string;
}) {
  return (
    <Vector as="feather" size={30} style={{ marginBottom: -3 }} {...props} />
  );
}
