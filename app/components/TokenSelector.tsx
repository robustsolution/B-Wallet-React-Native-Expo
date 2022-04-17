import {
  Image,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useRecoilState } from "recoil";
import { TChains } from "types";
import { TOKENS } from "../constants/Dummies";
import { SHADOWS, FONTS, SIZES } from "../constants/Assets";
import Colors from "../constants/Colors";
import { CurrentTokenState } from "../atoms";

const TOKEN_ITEMS = Object.values(TOKENS).map((token) => ({
  value: token.name as string,
  label: token.name as string,
  icon: () => (
    <Image source={TOKENS[token.name].icon} style={{ height: 40, width: 40 }} />
  ),
}));
interface IProps {
  defaultValue?: TChains;
  style?: StyleProp<ViewStyle>;
  dropDownContainerStyle?: StyleProp<ViewStyle>;
  onChange?: (value: TChains) => void;
}

const TokenSelector = ({
  style,
  defaultValue,
  dropDownContainerStyle,
  onChange,
}: IProps) => {
  const [currentToken, setCurrentToken] = useRecoilState(CurrentTokenState);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue || currentToken.name);
  const [items, setItems] = useState(TOKEN_ITEMS);

  const onChangeChain = (chain: TChains) => {
    if (onChange) {
      onChange(chain);
      return;
    }
    setCurrentToken(TOKENS[chain]);
  };

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
        dropDownContainerStyle={dropDownContainerStyle}
        style={style}
        arrowIconStyle={{ opacity: 0.5 }}
        onChangeValue={(value) => onChangeChain?.(value as TChains)}
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
  dropDownContainerStyle: {
    width: "50%",
    borderWidth: 0,
    marginTop: 5,
  },
};

export default TokenSelector;
