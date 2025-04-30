import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import {useState} from 'react';

// Bibliotecas do Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../modules/Controller';

import ImagemFundo from '../assets/degrade.jpg';

const Separator = () => <View style={styles.separator} />;

export default function Register({navigation}) {

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const cadastroUser = () => {
    createUserWithEmailAndPassword(auth,email,senha).then((userCredential) => {
        console.log('Cadastrado com sucesso!', userCredential.user.email) //OBS: o cadastro so será efetuado se o email tiver esse parametro: email@gmail.com, a senha tambem deve ter no minímo 6 caracteres(se nao for verifique as configurações de politica de senha em authentication)
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.log('Erro!',error.message);
        // ..
      });
    
}
    return (
        <View style={styles.container}>
            <ImageBackground source={ImagemFundo} style={styles.imageBackground}>
                <Text style={styles.texto1}> Cadastro </Text>
                <Separator />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
                <Button style={styles.botao} title="Cadastrar" onPress={cadastroUser}/>
                <Separator />
                <Button style={styles.botao} title="Logar" onPress={() => navigation.navigate('Login')} />
                <Separator />
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
    },
    botao: {},
    texto1: {
        fontSize: 30,
        fontFamily: 'Book Antiqua',
        marginBottom: 20,
    },
    separator: {
        marginVertical: 20,
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
    },
});