import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../config/constants';
import * as Screens from '../screens';
import {Context, Reducer} from '../reducer/reducer';

const Stack = createStackNavigator();

const AppRoute = () => {
  const {state, dispatch} = Reducer();
  return (
    <NavigationContainer>
      <Context.Provider value={{state, dispatch}}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={ROUTES.MAIN} component={Screens.Main} />
          <Stack.Screen name={ROUTES.TABLE} component={Screens.Table} />
        </Stack.Navigator>
      </Context.Provider>
    </NavigationContainer>
  );
};

export default AppRoute;
