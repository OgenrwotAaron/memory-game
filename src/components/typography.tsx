import * as React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

interface TypographyProps {
  style?: StyleProp<TextStyle>;
}

export const Typography: React.FC<TypographyProps> = ({ children, style }) => {
  return <Text style={[style]}>{children}</Text>;
};
