import {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal'

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*"

export function Home(){
//criando uma variavel size com atributo setSize
const [size, setSize] = useState(6);
const [passwordValue, setpassowordValue] = useState("")
const [modalVisible, setModalVisible] = useState(false);
function gereneratePassword(){

    let password = ""
    for(let i=0,n=charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setpassowordValue(password);
    setModalVisible(true);
}

  return(
    <View style={styles.container}>
      <Image 
      source={require("../../assets/logo.png")}
      style={styles.logo}
      />
      <Text
      style={styles.title}>
        {size} caracteres</Text>

      <View style={styles.area}>
      <Slider style={{height: 50}}
      minimumValue={6}
      maximumValue={20}
      maximumTrackTintColor='#ff000'
      minimumTrackTintColor='#000'
      thumbTintColor='#392de9'
      value={size}
      onValueChange={(value) => setSize(Math.floor(value))}
      >

      </Slider>

      </View>
      <TouchableOpacity style={styles.button} onPress={gereneratePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

    <Modal visible={modalVisible} animationType='fade' transparent={true}>
    <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,

  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#fff",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})