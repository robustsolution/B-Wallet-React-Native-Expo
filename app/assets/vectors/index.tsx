import { Feather, FontAwesome } from "@expo/vector-icons";
import { CSSProperties } from "react";
import { StyleProp, TextStyle } from "react-native";

type TVector = "feather" | "fontawesome";

interface IProps {
  size?: number;
  style?: StyleProp<TextStyle>;
  name?: string;
  color?: string;
  as?: TVector;
}

const Vector = ({ size, style, name, color, as }: IProps): JSX.Element => {
  if (as === "feather") {
    //@ts-ignore
    return <Feather name={name} size={size} style={style} color={color} />;
  }
  //@ts-ignore
  return <FontAwesome name={name} size={size} style={style} color={color} />;
};

export default Vector;
