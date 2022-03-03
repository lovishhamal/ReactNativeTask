import React from 'react';
import {StyleProp, TextInput, TextStyle} from 'react-native';
import {commonStyles as cs} from '../../assets/styles';
import {colors} from '../../config/app_config';

export const TextInputField = ({
  placeholder,
  placeholderColor,
  value,
  onChanged,
  name,
  keyboardType = 'default',
  maxLength,
  style,
}: {
  placeholder: string;
  placeholderColor?: string;
  value: string;
  onChanged: Function;
  name: string;
  keyboardType?: string;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
}) => {
  return (
    <TextInput
      maxLength={maxLength}
      keyboardType={keyboardType}
      placeholder={placeholder}
      style={[cs.textInputStyle, style]}
      placeholderTextColor={placeholderColor ?? colors.white}
      value={value}
      onChangeText={value => onChanged(name, value.toString())}
    />
  );
};
