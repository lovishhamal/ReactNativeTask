import React from 'react';
import {SafeAreaView} from 'react-native';
import {commonStyles as cs} from './src/assets/styles';
import AppRoute from './src/navigation/app_route';

const App = () => {
  return (
    <SafeAreaView style={cs.flex1}>
      <AppRoute />
    </SafeAreaView>
  );
};

export default App;
