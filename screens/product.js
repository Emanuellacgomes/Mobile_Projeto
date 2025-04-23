import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import {useState} from 'react';
import Card from '../components/card';
export default function Product(){

    const [produtos, setProdutos] = useState([
        { 
            id: 1,
            nome: 'Camiseta',
            valor: 9.99,
            imagem: 'https://th.bing.com/th/id/R.c6efa119b40776c39f46153361dde96c?rik=SH5vtGBnQgz3TA&pid=ImgRaw&r=0', 
        },
        {
            id: 2,
            nome: 'Moletom',
            valor: 159.99,
            imagem: 'https://http2.mlstatic.com/D_NQ_NP_820407-MLB80062120741_102024-O-moletom-liso-algodo-unissex-blusa-de-frio-canguru-flanelado.webp',
        },
        {
            id: 3,
            nome: 'Tênis',
            valor: 89.90,
            imagem: 'https://th.bing.com/th/id/OIP.Eh4L8s36pW22FU-GHtRcVAHaHa?w=218&h=218&c=7&r=0&o=5&pid=1.7',
        },
        {
            id: 4,
            nome: 'Calça',
            valor: 250.00,
            imagem: 'https://img.irroba.com.br/fit-in/600x600/filters:fill(transparent):quality(80)/salomaoc/catalog/teste/roupas/calcas/novo-fem/calca-a-1-220176.png',
        },
    ])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Lista de Produtos</Text>
            {/* Array 
            {produtos.map((item) => (
                <Text style={styles.txtprod}>
                    ID: {item.id} NOME: {item.nome} R$: {item.valor}
                </Text>
            ))} */}

            <FlatList
                data={produtos}
                renderItem={({item}) => (
                    <Card
                        nome={item.nome}
                        valor={item.valor}
                        imagem={item.imagem}
                    />
                )}
                keyExtractor={item => item.id} //basicamente diz que o 'id' é a chave primária
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
        textAlign: 'center',
    },
    card:{
        alignItems: 'center',
        padding: 15,
        margin: 20,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        width: '350px',
        height: '100px',
        flexDirection: 'row',
    },
    img:{
        height: '30px',
        width: '30px',
        backgroundColor: '#FAD',
        borderRadius: 5,
    }
})