import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import React from "react";

const TouchableText = ({
  style,
  textStyle,
  text,
  onPress,
}: {
  text: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TouchableText;
