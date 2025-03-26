import {Text, View, StyleSheet,Image, ImageBackground} from 'react-native'
import ImagemFundo from '../assets/background.gif'
export default function Contact(){
    return(
        <View style={styles.container}>
            <ImageBackground source={ImagemFundo} style={styles.backgroundImage}>
            <Text style={styles.texto1}>INTERESTING</Text>
            </ImageBackground>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    texto1:{
        fontFamily: 'BIG SHOT Regular',
        color: 'white'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch', // ou 'stretch' dependendo do efeito desejado
        width: '100%',
        height: '100%',
    },
})