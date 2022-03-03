import React from 'react';
import {Customtext} from '.';
import {colors} from '../../config/app_config';

export const Message = ({
  text,
  error = false,
}: {
  text: string;
  error?: boolean;
}) => {
  return <Customtext text={text} color={error ? colors.white : colors.green} />;
};
