import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default function Card({nome, valor, imagem,comprar}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <Text style={styles.txtprod}>{nome}</Text>
            <Text style={styles.txtprod}> R$: {valor}</Text>
            <Button color={'#2fff24'} title='Comprar' onPress={comprar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#AC8',
        justifyContent: 'center',
    },
    text:{
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 30,
    },
    txtprod:{
        fontSize: 20,
        textAlign: 'right',
        position: 'relative',
        bottom: '60px',
        right: '-75px',
    },
    card:{
        alignItems: 'center',
        padding: 15,
        margin: 20,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        width: '350px',
        height: '100px',
        flexDirection: 'column',
    },
    button:{
        color: '#2fff24'
    },
    img:{
        height: '70px',
        width: '70px',
        backgroundColor: '#FAD',
        borderRadius: 5,
        position: 'relative',
        left: '-135px',
        bottom: '0px',
    }
})