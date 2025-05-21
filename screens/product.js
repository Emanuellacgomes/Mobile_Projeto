import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import {useState, useEffect, use} from 'react';
import Card from '../components/card';
import { firestore } from '../modules/Controller';
import { collection, getDocs } from 'firebase/firestore';
import { useCarrinho } from '../components/ProviderCart';

const Separator = () => <View style={styles.separator} />;

export default function Product({navigation}){

    const [produtos, setProdutos] = useState([]);
    const {adicionarProduto} = useCarrinho();

    useEffect(() => {
        async function carregarProdutos() {
          try {
            const querySnapshot = await getDocs(collection (firestore, 'produtos'));
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({id: doc.id, ...doc.data()});
            });
            setProdutos(lista);
          } catch (error) {
            console.log("Erro ao buscar produtos:", error);
          }
        }

        carregarProdutos();
    }, []);

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
                        comprar={() => {
                            adicionarProduto(item);
                            navigation.navigate('Carrinho');
                        }}
                    />
                )}
                keyExtractor={item => item.id} //basicamente diz que o 'id' é a chave primária
            />
            <Separator />
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
        bottom: '55px',
        right: '-75px',
    },
    txtcadast : {
        fontSize: 20,
        color: '#FFFFFF',
        position: 'relative',
        left: '500px',
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
    separator: {
        marginVertical: 20,
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