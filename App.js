import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/login';
import Home from './screens/home';
import Feed from './screens/feed';
import Counter from './screens/counter';

function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#15BEFC',
      tabBarActiveBackgroundColor: '#A0E5FE',
      tabBarInactiveBackgroundColor: '#A0E5FE',
      headerStyle:{backgroundColor:'#A0E5FE'},
      headerTintColor:'#15BEFC',
      headerTitleAlign:'center',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
          return <MaterialCommunityIcons name={'home'} size={size} color={color} />;
        } else if (route.name === 'Feed') {
          iconName = focused ? 'rss' : 'rss-outline';
          return <FontAwesome name={'feed'} size={size} color={color} />;
        } else if (route.name === 'Counter') {
          iconName = focused ? 'numbers' : 'numbers-outline';
          return <MaterialIcons name={'feed'} size={size} color={color} />;
        }
      },
    })}>
      <BottomTab.Screen name='Home' component={Home}></BottomTab.Screen>
      <BottomTab.Screen name='Feed' component={Feed}></BottomTab.Screen>
      <BottomTab.Screen name='Counter' component={Counter}></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
