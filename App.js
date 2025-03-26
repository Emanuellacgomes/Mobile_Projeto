
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Home from './screens/home';
import Contact from './screens/contact';
export default function App() {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName='Home' screenOptions={{
        tabBarActiveTintColor: '#15BEFC',
        tabBarActiveBackgroundColor: '#A0E5FE',
        tabBarInactiveBackgroundColor: '#A0E5FE',
        headerStyle:{backgroundColor:'#A0E5FE'},
        headerTintColor:'#15BEFC',
        headerTitleAlign:'center'

      }}>
        <BottomTab.Screen name='Login' component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={25} color="black"/>
          )
        }}
        
        ></BottomTab.Screen>
        <BottomTab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={25} color="black"/>
          )
        }}></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
