import React, {useContext, useReducer} from 'react';
import {View} from 'react-native';
import {commonStyles as cs} from '../../assets/styles';
import {TableComponent} from '../../components';
import {Context} from '../../reducer/reducer';

export const Table = ({route}: {route: any}) => {
  const {state} = useContext<any>(Context);
  return (
    <View style={cs.flex1}>
      <TableComponent data={state.data} head={state.initialData[0]} />
    </View>
  );
};
