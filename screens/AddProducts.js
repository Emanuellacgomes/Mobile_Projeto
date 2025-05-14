import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button} from 'react-native';
import { firestore } from '../modules/Controller';
import { collection, addDoc } from 'firebase/firestore';

export default function AddProduct(){

    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [imagem, setImagem] = useState("");

    const CadastrarProduto = async () => {
        try{
            await addDoc(collection(firestore, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem
            });
            setNome('');
            setValor(''),
            setImagem('')
        }
        catch (error){
            console.log('Erro no cadastro do produto', error)
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Cadastrar Produtos!!!</Text>
            <TextInput style={styles.input} placeholder="Nome do Produto" value={nome} onChangeText={setNome}/>
            <TextInput style={styles.input} placeholder="Preço" value={valor} onChangeText={setValor}/>
            <TextInput style={styles.input} placeholder="Imagem" value={imagem} onChangeText={setImagem}/>
            <Button style={styles.botao} title="Cadastrar" onPress={CadastrarProduto}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#AC8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        marginBottom: 20,
        color: '#FFFFFF',
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
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
})