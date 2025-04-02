
// Only import react-native-gesture-handler on native platforms
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
    <BottomTab.Navigator screenOptions={{
      tabBarActiveTintColor: '#15BEFC',
      tabBarActiveBackgroundColor: '#A0E5FE',
      tabBarInactiveBackgroundColor: '#A0E5FE',
      headerStyle:{backgroundColor:'#A0E5FE'},
      headerTintColor:'#15BEFC',
      headerTitleAlign:'center'

    }}>
      <BottomTab.Screen name='Home' component={Home}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="home" size={25} color="black"/>
        )
      }}></BottomTab.Screen>
      <BottomTab.Screen name='Feed' component={Feed}
      options={{
        tabBarIcon: () => (
          <FontAwesome name="feed" size={25} color="black" />
        )
      }}></BottomTab.Screen>

      <BottomTab.Screen name='Counter' component={Counter}
      options={{
        tabBarIcon: () => (
          <MaterialIcons name="numbers" size={24} color="black" />
        )
      }}>
      </BottomTab.Screen>
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
