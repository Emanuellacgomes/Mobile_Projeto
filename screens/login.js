import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../modules/Controller';
import ImagemFundo from '../assets/degrade.jpg';

const Separator = () => <View style={styles.separator} />;

export default function Login({navigation}) {

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const VerificaUser = () => {
    signInWithEmailAndPassword(auth, email, senha).then(userCredential => {
        console.log('Usuário Logado!', userCredential.user.email);
        navigation.navigate('HomeTab');
    })
    .catch((error) => {
        console.log('Erro no Login!', error.message);
    })
}

    return (
        <View style={styles.container}>
            <ImageBackground source={ImagemFundo} style={styles.imageBackground}>
                <Text style={styles.texto1}> Login </Text>
                <Separator />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry={true}/>
                <Button style={styles.botao} title="Entrar" onPress={VerificaUser} />
                <Separator />
                <Button style={styles.botao} title="Cadastre-se" onPress={() => navigation.navigate('Cadastro')} />
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