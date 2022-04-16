import { FONTS } from "app/constants/Assets";
import { Text, TextProps } from "./Themed";

export const RegularText = (props: TextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: FONTS.regular }]} />
  );
};

export const LightText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: FONTS.light }]} />;
};

export const BoldText = (props: TextProps) => {
  return <Text {...props} style={[props.style, { fontFamily: FONTS.bold }]} />;
};

export const MediumText = (props: TextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: FONTS.medium }]} />
  );
};

export const SemiText = (props: TextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: FONTS.semibold }]} />
  );
};

export const MonoText = (props: TextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: FONTS.monoRegular }]} />
  );
};

export const LightMonoText = (props: TextProps) => {
  return (
    <Text {...props} style={[props.style, { fontFamily: FONTS.monoLight }]} />
  );
};
