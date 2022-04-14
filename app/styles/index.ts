import { StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary.background,
    color: Colors.primary.text,
    flex: 1,
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
  primaryColor: {
    backgroundColor: Colors.primary.background,
    color: Colors.primary.text,
  },
  secondaryColor: {
    backgroundColor: Colors.secondary.background,
    color: Colors.secondary.text,
  },
  tertiaryColor: {
    backgroundColor: Colors.tertiary.background,
    color: Colors.tertiary.text,
  },
});

export default styles;
