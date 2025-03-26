import { Text, View, StyleSheet, Button, ImageBackground, TextInput } from 'react-native';
import ImagemFundo from '../assets/degrade.jpg';

const Separator = () => <View style={styles.separator} />;

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={ImagemFundo} style={styles.imageBackground}>
                <Text style={styles.texto1}>Login - Loja</Text>
                <Separator />
                <TextInput style={styles.input} placeholder="Senha" keyboardType="numeric" />
                <Button style={styles.botao} title="Logar" onPress={() => navigation.navigate('Home')} />
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