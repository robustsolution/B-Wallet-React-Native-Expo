import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

type TVector = "feather" | "fontawesome" | "ionicons" | "materialCI";

interface IProps {
  size?: number;
  style?: StyleProp<TextStyle>;
  name?: string;
  color?: string;
  as?: TVector;
  onPress?: () => void;
}

const Vector = ({
  size,
  style,
  name,
  color,
  as,
  onPress,
}: IProps): JSX.Element => {
  const props = {
    name,
    size,
    style,
    color,
    onPress,
  };

  if (as === "feather") {
    //@ts-ignore
    return <Feather {...props} />;
  }
  if (as === "ionicons") {
    //@ts-ignore
    return <Ionicons {...props} />;
  }

  if (as === "materialCI") {
    return (
      //@ts-ignore
      <MaterialCommunityIcons
        name={name as any}
        size={size}
        color={color}
        onPress={onPress}
      />
    );
  }
  //@ts-ignore
  return <FontAwesome {...props} />;
};

export default Vector;
