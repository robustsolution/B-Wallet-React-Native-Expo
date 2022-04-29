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
  name?: any;
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
    return <Feather {...props} />;
  }
  if (as === "ionicons") {
    return <Ionicons {...props} />;
  }

  if (as === "materialCI") {
    return (
      <MaterialCommunityIcons
        name={name as any}
        size={size}
        color={color}
        onPress={onPress}
      />
    );
  }
  return <FontAwesome {...props} />;
};

export default Vector;
