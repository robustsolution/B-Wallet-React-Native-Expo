import { FONTS, SHADOWS, SIZES } from "../constants/Assets";
import { StyleSheet } from "react-native";
import COLORS from "../constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    flex: 1,
  },
  startButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: COLORS.secondary,
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
    backgroundColor: COLORS.tertiary,
  },
  primaryColor: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
  },
  secondaryColor: {
    backgroundColor: COLORS.secondary,
    color: COLORS.primary,
  },
  tertiaryColor: {
    backgroundColor: COLORS.tertiary,
    color: COLORS.primary,
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
  cardMainWrapper: {
    margin: SIZES.p20,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: COLORS.gray10,
  },
  primaryButtonView: {
    backgroundColor: COLORS.primary,
    marginHorizontal: SIZES.p20,
    padding: SIZES.p15,
    borderRadius: SIZES.small,
  },
  primaryButtonText: {
    textAlign: "center",
    color: COLORS.white,
    fontFamily: FONTS.semibold,
    fontSize: SIZES.font,
  },
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  selectorStyle: { borderColor: COLORS.gray10 },
  dropdownContainerStyle: {
    width: SIZES.full,
    marginTop: 5,
    borderColor: COLORS.gray10,
  },
});

export default styles;
