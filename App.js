import {StyleSheet, Text, View} from 'react-native';
import Login from './screens/login';
import Home from './screens/home';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
export default function App() {
  return (
    <View style={styles.container}>

    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})