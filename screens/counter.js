import {View,Text,Image,Button,StyleSheet,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import { useState } from 'react';



export default function Counter(){
    const [contador, setContador] = useState(0)
    function Aumentar(){
        setContador(contador + 1)
    }
    function Diminuir(){
        if (contador <= 0){
            setContador(contador = 0);
        } else{
            setContador(contador - 1);
        }
        
    }
    return(
        <View style={styles.container}>
        <Text style={styles.title1}>Um Simples Contador</Text>
        <Text style={styles.title}>Contador: {contador} </Text>
        



        <View style={styles.row}>
        <TouchableOpacity style={styles.botao} onPress={Aumentar}>
            <Text style={styles.txtBotao}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao} onPress={Diminuir}>
            <Text style={styles.txtBotao}>-</Text>
        </TouchableOpacity>
        
        {/* <Button
            title='+'
            color={'#FAD'}
            onPress={Aumentar}
        />
        <Button
            title='-'
            color={'#FAD'}
            onPress={Diminuir}
        /> */}
        </View>
        <View style={styles.viewInput}>
            <TextInput style={styles.input} placeholder='Nome' placeholderTextColor={'#AB3BCD'}></TextInput>
            <TextInput style={styles.input} placeholder='E-mail' placeholderTextColor={'#AB3BCD'}></TextInput>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FCF',
        justifyContent: 'space-evenly',
        alignItems:'center',
    },
    title:{
        fontSize: 25,
        color:'#CD329D'
    },
    title1:{
        fontSize: 37,
        color:'#AF569A'
    },
    row:{
        width: '30%',
        flexDirection:'row',
        justifyContent:'space-around',
    },
    botao:{
        backgroundColor: '#FF007F',
        width:'40%',
        borderRadius:'10%',
    },
    txtBotao:{
        textAlign:'center',
        color:'white',
        fontSize:22,
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 3,
        padding: 10,
        marginBottom: 20,
        borderColor:'#AB3BCD',
        borderRadius: 10,
    },
    viewInput: {
    
    }
})