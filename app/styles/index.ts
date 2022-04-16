import { SHADOWS, SIZES } from "../constants/Assets";
import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    color: Colors.white,
    flex: 1,
  },
  startButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: Colors.secondary,
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
    backgroundColor: Colors.tertiary,
  },
  primaryColor: {
    backgroundColor: Colors.primary,
    color: Colors.white,
  },
  secondaryColor: {
    backgroundColor: Colors.secondary,
    color: Colors.primary,
  },
  tertiaryColor: {
    backgroundColor: Colors.tertiary,
    color: Colors.primary,
  },
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leadingIcon: {
    width: 50,
    height: 50,
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -SIZES.p20,
    ...SHADOWS.elevation0,
  },
});

export default styles;
