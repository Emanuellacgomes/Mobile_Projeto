
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Home from './screens/home';
import Contact from './screens/contact';
export default function Bottom() {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: '#15D9FC',

      }}>
        <BottomTab.Screen name='Login' component={Login}></BottomTab.Screen>
        <BottomTab.Screen options={{ tabBarIconStyle: '../assets/icons/home.png' }} name='Home' component={Home}></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
