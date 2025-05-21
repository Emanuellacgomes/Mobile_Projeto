import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useCarrinho } from '../components/ProviderCart';

export default function Cart({navigation}){
    const {carrinho} = useCarrinho();
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Carrinho</Text>
            <FlatList
            data={carrinho}
            renderItem={({item}) => (
                <View style={styles.card}>
                    <Image style={styles.img} source={{uri: item.imagem}} />
                    <Text style={styles.txtprod}>{item.nome}
                    </Text>
                    <Text style={styles.txtprod}>R$ {item.valor}</Text>
                </View>
            
            )}
            />
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