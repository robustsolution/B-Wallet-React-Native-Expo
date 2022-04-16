import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Feather } from "@expo/vector-icons";
import { ColorSchemeName, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Profile from "../screens/Profile";
import { RootStackParamList, RootTabParamList } from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import Vector from "../assets/vectors";
import { Shadows } from "../constants/Assets";

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
    // @ts-ignore
    <Stack.Navigator initialRouteName="Onboarding">
      {/* <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="Root"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// const BottomTabNavigator = () => {
//   const colorScheme = useColorScheme();

//   return (
//     // @ts-ignore
//     <BottomTab.Navigator
//       initialRouteName="HomeTab"
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme].tint,
//       }}
//     >
//       <BottomTab.Screen
//         name="HomeTab"
//         component={Home}
//         options={() => ({
//           title: "Home",
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
//         })}
//       />
//       <BottomTab.Screen
//         name="TradeTab"
//         component={Home}
//         options={() => ({
//           title: "Trade",
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarIcon: () => (
//             <View
//               style={{
//                 top: -20,
//                 height: 70,
//                 width: 70,
//                 justifyContent: "center",
//                 alignItems: "center",
//                 borderRadius: 50,
//                 backgroundColor: Colors.primary.background,
//                 ...Shadows.shadow8,
//               }}
//             >
//               <Vector
//                 name="exchange"
//                 size={20}
//                 color={Colors.secondary.background}
//                 style={{
//                   borderWidth: 2,
//                   padding: 5,
//                   borderColor: Colors.secondary.background,
//                   borderRadius: 8,
//                 }}
//               />
//             </View>
//           ),
//         })}
//       />
//       <BottomTab.Screen
//         name="ProfileTab"
//         component={Profile}
//         options={{
//           title: "Profile",
//           tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof Feather>["name"];
//   color: string;
// }) {
//   return (
//     <Vector as="feather" size={30} style={{ marginBottom: -3 }} {...props} />
//   );
// }
