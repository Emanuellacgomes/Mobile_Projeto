import {Text, View, StyleSheet,Image} from 'react-native'

export default function Teste(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto1}>
                Texto_grudadinho
            </Text>
            <Text style={styles.texto2}>Texto_do_outro_canto!</Text>
            <Text style={styles.texto3}>Créditos:_Emanuel_de_Lacerda_Gomes</Text>
            <Image style={styles.img1} source={{uri:'https://www.bing.com/th/id/OGC.c04212fe3958bd161ed22572c99a4328?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fYkzFWtNab-kAAAAC%2fthe-owl-house.gif&ehk=e1BMY5lWEsliKqozM8oyhEgICYwMKr7sLmqBXLuB%2b%2fE%3d'}}></Image>
            <Image style={styles.img1} source={{uri:'https://www.bing.com/th/id/OGC.c04212fe3958bd161ed22572c99a4328?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fYkzFWtNab-kAAAAC%2fthe-owl-house.gif&ehk=e1BMY5lWEsliKqozM8oyhEgICYwMKr7sLmqBXLuB%2b%2fE%3d'}}></Image>
            <Image style={styles.img2} source={{uri:'https://media1.tenor.com/m/6Hsl3pCOxxQAAAAd/dislyte-anna.gif'}}></Image>
            <Image style={styles.img2} source={{uri:'https://media1.tenor.com/m/6Hsl3pCOxxQAAAAd/dislyte-anna.gif'}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ffaf',
        justifyContent:'center',
        flexDirection: 'row',
    },
    texto1:{
        top: 20,
        left: 545,
    },
    texto2:{
        top: 320,
        left: 645,
        position: 'relative',
    },
    texto3:{
        top: 820,
        left: 350,
    },
    img1:{
        width:100,
        height:100,
        top: 200,
        position:'relative',
        marginLeft: 135,
        left: -77,
    },
    img2:{
        width:100,
        height:100,
        top: 500,
        position:'relative',
        marginLeft: 135,
        left: -545,
    },
})