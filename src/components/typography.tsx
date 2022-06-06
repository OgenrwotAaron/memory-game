import * as React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

type Variant = "Bold" | "Light" | "Medium" | "Regular" | "SemiBold" | "Italic";

interface TypographyProps {
  variant: Variant;
  style?: StyleProp<TextStyle>;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  style,
  variant,
}) => {
  return (
    <Text style={[{ fontFamily: `EuclidCircularB-${variant}` }, style]}>
      {children}
    </Text>
  );
};
