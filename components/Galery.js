import {Text, View, StyleSheet,Image} from 'react-native'



export function Profile(){
    return(
        <View style={styles.profile}>
            <Text>Aqui um Texto muito Incrivel do Perfil</Text>
            <Text>Não estou criativa hoje</Text>
            <Text>Sejam Criativos nos de vocês!</Text>
            <Image style={styles.img} source={{uri:'https://www.bing.com/th/id/OGC.9427026bca179d73dc7ce884d5d2ba9b?pid=1.7&rurl=https%3a%2f%2fsteamuserimages-a.akamaihd.net%2fugc%2f779623890174393261%2f1405479F50F8A15B3E14631914561B7F5EFD7FDA%2f&ehk=Om%2bkUrF0dWVC7WIuVnOfBw1WBW8eTsYN1h7uapdtPAw%3d'}}></Image>
        </View>
    )
}

export function Favorites(){
    return(
        <View style={styles.favorites}>
            <Text>Aqui um Texto muito Incrivel dos Favoritos</Text>
            <Image source={require('C:/Users/emanuel.20524/Documents/ProjetosMobile/PrimeiroProjetoMobile/assets/deltarune-kris.gif')} />
        </View>
    )
}

export default function Gallery(){
    return(
        <View style={styles.container}>
            <Text>Aqui um Texto muito Incrivel da Galeria</Text>
            <Image style={styles.img} source={{uri:'https://www.bing.com/th/id/OGC.c04212fe3958bd161ed22572c99a4328?pid=1.7&rurl=https%3a%2f%2fmedia.tenor.com%2fYkzFWtNab-kAAAAC%2fthe-owl-house.gif&ehk=e1BMY5lWEsliKqozM8oyhEgICYwMKr7sLmqBXLuB%2b%2fE%3d'}}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#30f2ab',
    },
    profile:{
        flex: 2,
        backgroundColor:'#fad',
        alignItems:'center',
        justifyContent:'center',
    },
    favorites:{
        flex: 3,
        backgroundColor:'#ffc',
        alignItems:'center',
        justifyContent:'center',
    },
    img:{
        width:200,
        height:200,
    }
})