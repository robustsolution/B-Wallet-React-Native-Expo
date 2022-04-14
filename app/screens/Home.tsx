import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "app/styles";
import { Opacity, Shadows, Sizes } from "app/constants/Assets";
import Vector from "app/assets/vectors";

const tabs = [
  { title: "Send", id: 1 },
  { title: "Receive", id: 2 },
  { title: "Trade", id: 3 },
];

const Home = () => {
  return (
    <ScrollView>
      <View style={{ flex: 1, paddingBottom: 130 }}>
        <View
          style={{
            height: 280,
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
                @satoshi
              </Text>
              <Text
                style={{
                  color: styles.primaryColor.color,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginVertical: 12,
                }}
              >
                US {248049}
              </Text>

              <View
                style={{
                  padding: 6,
                  paddingHorizontal: 12,
                  ...styles.tertiaryColor,
                  borderRadius: 100,
                }}
              >
                <Text>0x7934...j643</Text>
              </View>
            </View>

            <FlatList
              data={tabs}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    borderLeftWidth: index !== 0 ? 0.5 : 0,
                    borderColor: "rgba(196, 196, 196, 0.54)",
                  }}
                >
                  <Text>{item.title}</Text>
                </View>
              )}
              style={{
                bottom: -50,
                width: "100%",
                height: 70,
                backgroundColor: "#fff",
                borderRadius: Sizes.p6,
                ...Shadows.shadow,
              }}
            />

            {/* <View
              style={{
                bottom: -60,
                height: 70,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: Sizes.p6,
                ...Shadows.shadow,
              }}
            >
              {tabs.map((tab, index) => (
                <View
                  key={tab.id}
                  style={{
                    width: "100%",
                    // height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeftWidth: index !== 0 ? 0.5 : 0,
                    borderColor: "rgba(196, 196, 196, 0.54)",
                  }}
                >
                  <Text>{tab.title}</Text>
                </View>
              ))}
            </View> */}
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
