import React from "react";
import { useNavigation } from "@react-navigation/native";
import TouchableText from "./TouchableText";
import { FONTS, SIZES } from "../constants/Assets";
import COLORS from "../constants/Colors";

const ModalHeaderRight = ({ text }: { text?: string }) => {
  const navigation = useNavigation();

  return (
    <TouchableText
      text={text || "Done"}
      textStyle={{
        fontSize: SIZES.medium,
        fontFamily: FONTS.medium,
        color: COLORS.white,
      }}
      onPress={() => navigation.goBack()}
    />
  );
};

export default ModalHeaderRight;
