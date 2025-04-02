import {View, Text,StyleSheet,ImageBackground,Image} from 'react-native';
import ImagemFundo from '../assets/backgroundNEW.gif';
import SOUL from '../assets/BLUR_HEART.png';
export default function Feed(){
    return(
        <View style={styles.container}>
            <ImageBackground source={ImagemFundo} style={styles.backgroundImage}>
            <Text style={styles.texto}>INFORMACOES INTERESANTES:</Text>
            <Image style={styles.imagem} source={SOUL}></Image>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    texto:{
        fontSize: 23,
        color:"white",
        fontFamily: 'BIG SHOT Regular',
        position:'relative',
        top:'30px',
        left:'10px',
    },
    imagem:{
        width:'100px',
        height:'100px',
        position:'relative',
        top:'300px',
        left:'150px',
    },
    backgroundImage: {
        flex: 1,
        position:'relative',
        resizeMode:'center',
        left: '0px',
        width: '400px',
        height: '735px',
    },
})