import React, {useContext, useState} from 'react';
import {filterStyles as fs} from '../../assets/styles/component/common';
import {Context} from '../../reducer/reducer';
import {TextInputField} from '../common';

export const Filter = () => {
  const {dispatch} = useContext<any>(Context);
  const [value, setValue] = useState<any>('');

  const onChanged = (name: string, value: string) => {
    setValue(value);
    dispatch({type: 'FILTER_DATA', payload: value});
  };

  return (
    <TextInputField
      onChanged={onChanged}
      placeholder="Filter by brand or country"
      value={value}
      name="filter"
      style={fs.textInput}
    />
  );
};
