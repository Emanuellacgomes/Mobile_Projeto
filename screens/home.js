import {Text, View, StyleSheet,Image, ImageBackground} from 'react-native'
import ImagemFundo from '../assets/degrade.jpg'
export default function Home(){
    return(
        <View style={styles.container}>
            <Image style={styles.imgtopo} source={{uri:'https://th.bing.com/th?id=OIP.MUaJmsq0ls5_CltevHh5zAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'}}></Image>
            <ImageBackground source={ImagemFundo}></ImageBackground>
            <Text style={styles.texto1}>Passarela Delas</Text>
            <Text style={styles.texto2}>Compre Agora!</Text>
            <Text style={styles.texto4}>Frete Grátis!</Text>
            <Image style={styles.img1} source={{uri:'https://th.bing.com/th/id/OIP.Zake99cZ-u6qLgz6p1bijgHaE7?w=303&h=202&c=7&r=0&o=5&pid=1.7'}}></Image>
            <Image style={styles.img2} source={{uri:'https://eudecoro.com.br/wp-content/uploads/2020/07/decoracao-loja-com-papel-de-parede-preto-celiabeatriz-103431-proportional-height_cover_medium.jpg'}}></Image>
            <Image style={styles.outraimg} source={{uri:'https://th.bing.com/th?id=OIP.MUaJmsq0ls5_CltevHh5zAHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'}}></Image>
            <Text style={styles.texto3}>Do comforto do seu celular!</Text>
            <Image style={styles.img3} source={{uri:'https://i.pinimg.com/originals/f2/11/02/f211020dffeb8e0074ab37cb77089214.jpg'}}></Image>
            <Image style={styles.img4} source={{uri:'https://th.bing.com/th/id/OIP.YebQ6hGYsj99ZsuJznHlFwHaEV?w=314&h=184&c=7&r=0&o=5&pid=1.7'}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#faf',
    },
    imgtopo:{
        top: 0,
        width:470,
        height:80,
    },
    texto1:{
        top: -45,
        left: 10,
        fontSize: 30,
        fontFamily:'Determination Mono Web',
        color:'#FFF',
    },
    texto2:{
        top: 65,
        left: 220,
        fontSize: 23,
        fontFamily:'Determination Mono Web',
    },
    outraimg:{
        top: 200,
        width: 470,
        height: 280,
    },
    texto3:{
        top: -55,
        left: 30,
        fontSize: 25,
        fontFamily:'Determination Mono Web',
        color: '#FFF',
    },
    texto4:{
        fontFamily:'Determination Mono Web',
        fontSize: 22,
        top: 200,
        left: 27,
    },
    img1:{
        width:170,
        height:80,
        top: -20,
        marginLeft: 135,
        left: -97,
        borderCurve: 100,
    },
    img2:{
        width:170,
        height:80,
        top: 50,
        left: 190,
    },
    img3:{
        width:170,
        height:170,
        top: -35,
        left: 0,
    },
    img4:{
        width:170,
        height:170,
        top: -205,
        left: 220,
    },
})