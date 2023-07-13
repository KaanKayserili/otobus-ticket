import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Register from './screens/Register';
import Search from './screens/Search';
import Listing from './screens/Listing';
import Details from './screens/Details';
import Pay from './screens/Pay';

const App = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false
  }

  const [currentRoute, setCurrentRoute] = React.useState("Login");

  const handleNavigationStateChange = (state) => {
    if (state && state.routes && state.routes.length > 0) {
      setCurrentRoute(state.routes[state.index].name);
    }
  };


  return (
    <NavigationContainer onStateChange={handleNavigationStateChange}>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Pay" component={Pay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
