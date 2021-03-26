
import React from 'react';
import {Home} from './src/pages/home'
import {SearchScreen} from './src/pages/searchScreen'

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
    // <Provider store={store}> 
      <NavigationContainer>
         <Stack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    // </Provider>
    );
  }
}
