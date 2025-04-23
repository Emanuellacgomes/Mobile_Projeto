import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card({nome, valor, imagem}){
    return(
        <View style={styles.card}>
            <Image style={styles.img} source={{uri: imagem}}/>
            <Text style={styles.txtprod}>
                NOME: {nome}
            </Text>
            <Text style={styles.txtprod}>
                VALOR: {valor}
            </Text>
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
        bottom: '35px',
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
    img:{
        height: '50px',
        width: '50px',
        backgroundColor: '#FAD',
        borderRadius: 5,
        position: 'relative',
        left: '-135px',
        bottom: '-15px',
    }
})