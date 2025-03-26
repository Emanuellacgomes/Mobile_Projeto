
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/login';
import Home from './screens/home';
import Contact from './screens/contact';
export default function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Login' component={Login}></Drawer.Screen>
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
