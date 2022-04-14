import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

type TVector = "feather" | "fontawesome" | "ionicons";

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
  if (as === "ionicons") {
    //@ts-ignore
    return <Ionicons name={name} size={size} style={style} color={color} />;
  }
  //@ts-ignore
  return <FontAwesome name={name} size={size} style={style} color={color} />;
};

export default Vector;