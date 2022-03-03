import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {Divider} from '.';
import {commonStyles as cs} from '../../assets/styles';
import {Customtext} from './text';

export const CustomButton = ({
  title,
  onPress,
  loading = false,
  style,
  loadingSize = 20,
  titleColor,
}: {
  title: string;
  onPress: Function;
  loading: boolean;
  style?: StyleProp<TextStyle>;
  loadingSize?: number;
  titleColor?: string;
}) => {
  return (
    <TouchableOpacity
      style={[cs.button, style]}
      onPress={() => {
        if (loading) return;
        onPress();
      }}>
      <Customtext text="Submit" color={titleColor} />
      <Divider />
      {loading && <ActivityIndicator size={loadingSize} />}
    </TouchableOpacity>
  );
};
