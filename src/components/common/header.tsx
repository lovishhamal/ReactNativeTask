import React from 'react';
import {View} from 'react-native';
import normalize from 'react-native-normalize';
import {commonStyles as cs} from '../../assets/styles';
import {colors} from '../../config/app_config';
import {Customtext} from './text';

export const Header = ({title}: {title: string}) => {
  return (
    <View style={cs.header}>
      <View style={cs.headerText}>
        <Customtext text={title} fontSize={normalize(35)} />
      </View>
    </View>
  );
};
