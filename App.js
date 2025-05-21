import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ProviderCart } from './components/ProviderCart';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Login from './screens/login';
import Home from './screens/home';
import Feed from './screens/feed';
import Counter from './screens/counter';
import Product from './screens/product';
import Register from './screens/Register';
import AddProduct from './screens/AddProducts';
import Cart from './screens/Cart';


function BottomTabs(){
  const BottomTab = createBottomTabNavigator();
  return(
    <BottomTab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#008c00',
      tabBarInactiveTintColor: '',
      tabBarActiveBackgroundColor: '#95f595',
      tabBarInactiveBackgroundColor: '#95f595',
      headerStyle:{backgroundColor:'#95f595'},
      headerTintColor:'#008c00',
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
        } else if (route.name === 'Product') {
          iconName = focused ? 'store' : 'store-outline';
          return <FontAwesome5 name={'store'} size={size} color={color} />
        } else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
          return <FontAwesome name={'shopping-cart'} size={size} color={color} />
        } else if (route.name === 'Add Products') {
          iconName = focused ? 'add-product' : 'add-product-outline';
          return <FontAwesome name={'plus'} size={size} color={color} />
        }
      },
    })}>
      <BottomTab.Screen name='Home' component={Home}></BottomTab.Screen>
      <BottomTab.Screen name='Feed' component={Feed}></BottomTab.Screen>
      <BottomTab.Screen name='Counter' component={Counter}></BottomTab.Screen>
      <BottomTab.Screen name='Add Products' component={AddProduct}></BottomTab.Screen>
      <BottomTab.Screen name='Product' component={Product}></BottomTab.Screen>
      <BottomTab.Screen name='Cart' component={Cart}></BottomTab.Screen>
    </BottomTab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name='Login' component={Login}></Stack.Screen>
          <Stack.Screen name='Cadastro' component={Register}></Stack.Screen>
          <Stack.Screen options={{headerShown:false}} name='HomeTab' component={BottomTabs}></Stack.Screen>
          <Stack.Screen name='Cadastrar Produtos' component={AddProduct}></Stack.Screen>
          <Stack.Screen name='Carrinho' options={{headerTintColor:'#008c00', headerStyle:{backgroundColor:'#95f595'}}} component={Cart}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>
  );
}
