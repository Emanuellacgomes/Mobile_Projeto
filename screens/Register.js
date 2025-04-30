import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import {useState} from 'react';
import ImagemFundo from '../assets/degrade.jpg';

const Separator = () => <View style={styles.separator} />;

export default function Register({navigation}) {
    
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
    return (
        <View style={styles.container}>
            <ImageBackground source={ImagemFundo} style={styles.imageBackground}>
                <Text style={styles.texto1}> Cadastro </Text>
                <Separator />
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
                <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry={false}/>
                <Button style={styles.botao} title="Cadastrar"  />
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