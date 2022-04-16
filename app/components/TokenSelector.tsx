import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { TOKENS, USER_DATA } from "../constants/Dummies";
import { SHADOWS, FONTS, SIZES } from "../constants/Assets";
import Colors from "../constants/Colors";

const TokenSelector = () => {
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
        labelStyle={{ fontFamily: FONTS.regular, overflow: "hidden" }}
        labelProps={{ numberOfLines: 1 }}
        dropDownContainerStyle={{
          width: "50%",
          borderWidth: 0,
          marginTop: 5,
        }}
        style={{
          width: "50%",
          borderRadius: 100,
          paddingRight: SIZES.p20,
          backgroundColor: Colors.gray,
          ...SHADOWS.shadow8,
        }}
      />
    </TouchableWithoutFeedback>
  );
};

export default TokenSelector;
