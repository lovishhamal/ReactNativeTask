import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import {colors} from '../../config/app_config';

export const Customtext = ({
  text,
  style,
  fontSize = 14,
  color = colors.white,
}: {
  text: string;
  style?: StyleProp<TextStyle>;
  fontSize?: number;
  color?: string;
}) => {
  return <Text style={[{fontSize, color: color}, style]}>{text}</Text>;
};
