import {
  Image,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { TOKENS, USER_DATA } from "../constants/Dummies";
import { SHADOWS, FONTS, SIZES } from "../constants/Assets";
import Colors from "../constants/Colors";
import { TChains } from "types";

interface IProps {
  style?: StyleProp<ViewStyle>;
  onChange?: (value: TChains) => void;
}

const TokenSelector = ({ style, onChange }: IProps) => {
  const TOKEN_ITEMS = Object.values(TOKENS).map((token) => ({
    value: token.name as string,
    label: token.name as string,
    icon: () => (
      <Image
        source={TOKENS[token.name].icon}
        style={{ height: 40, width: 40 }}
      />
    ),
  }));

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(USER_DATA.token);
  const [items, setItems] = useState(TOKEN_ITEMS);

  return (
    <TouchableWithoutFeedback onPress={() => setOpen(false)}>
      <DropDownPicker
        multiple={false}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        props={{ onBlur: () => setOpen(false) }}
        placeholder="Select a Token"
        containerStyle={{ zIndex: 10 }}
        disableBorderRadius={false}
        labelStyle={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.font,
          overflow: "hidden",
        }}
        labelProps={{ numberOfLines: 1 }}
        dropDownContainerStyle={{
          width: "50%",
          borderWidth: 0,
          marginTop: 5,
        }}
        style={style}
        arrowIconStyle={{ opacity: 0.5 }}
        onChangeValue={(value) => onChange?.(value as TChains)}
      />
    </TouchableWithoutFeedback>
  );
};

TokenSelector.defaultProps = {
  style: {
    width: "50%",
    borderRadius: 100,
    paddingRight: SIZES.p20,
    backgroundColor: Colors.gray,
    ...SHADOWS.shadow8,
  },
};

export default TokenSelector;
