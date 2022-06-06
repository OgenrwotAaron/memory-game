import * as React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors, sizes } from "../theme";
import { Typography } from "./typography";

type Variant = "filled" | "outlined" | "default";

interface ButtonProps {
  variant: Variant;
  label: string;
  onPress?:
    | (((event: GestureResponderEvent) => void) & (() => void))
    | undefined;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
  color?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  label,
  onPress,
  style,
  disabled,
  loading,
  color,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.root,
        styles[variant],
        style,
        disabled && { backgroundColor: colors.plumWeb },
      ]}
    >
      {!loading ? (
        <Typography
          style={{
            fontSize: sizes.header,
            color:
              variant === "filled" ? colors.white : color || colors.plumWeb,
          }}
          variant="SemiBold"
        >
          {label}
        </Typography>
      ) : (
        <ActivityIndicator
          animating={loading}
          color={variant === "filled" ? colors.white : colors.redVioletCrayola}
        />
      )}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  loading: false,
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: sizes.margin,
    borderRadius: 10,
    justifyContent: "center",
    margin: sizes.margin,
  },
  default: {
    backgroundColor: "transparent",
  },
  filled: {
    backgroundColor: colors.redVioletCrayola,
  },
  outlined: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.trueBlue,
    backgroundColor: "transparent",
  },
});
