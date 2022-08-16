import React from "react";
import { TextInput } from "react-native";

import { styles } from "./styles";

export type TextInputProps = {
  onChangeText?: (text: string) => void;
  placeholder: string;
};

const Input = ({ onChangeText, placeholder, ...props }: TextInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#555"
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export default Input;
