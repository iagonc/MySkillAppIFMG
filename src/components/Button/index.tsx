import React, { ReactNode } from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

import { styles } from "./styles";

export type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children: ReactNode;
  disabled?: boolean;
};

const Button = ({ onPress, children, disabled, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { opacity: disabled ? 0.5 : 1 }]}
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
