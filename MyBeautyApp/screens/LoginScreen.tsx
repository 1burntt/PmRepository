import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';
import CustomInput from '../src/components/CustomInput';
import CustomButton from '../src/components/CustomButton';

export default function App() {
  const [email,setEmail] = useState("");
 
  return (
    <View style={styles.container}>

      <View style={styles.containerr}>
        <Text style= {styles.contentBubble}>Sign in</Text>
          <StatusBar style="auto" />

          <View style={styles.inputWrapper}>
            <CustomInput type="email" placeholder="Correo" value={email} onChangeText={setEmail}/>
            <Text style={styles.texxt}>Correo invalido</Text>
          </View>
        
          <View style={styles.inputWrapper}>
          <CustomInput type="password" placeholder="Contraseña" value={email} onChangeText={setEmail}/>
          <Text style={styles.texxt}>Este campo es obligatorio</Text>
          </View>
          
      <CustomButton title={"Login"} onPress= {()=> {} }  variant="primary"/>

      <CustomButton title={"Registrarse"} onPress= {()=> {} }  variant="tertiary"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edece8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
  },
  containerr: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
    padding: 25,
    borderRadius: 12,
    width: '90%',
    gap: 15,
    shadowColor: '#000000ff',
    shadowOffset: {
      width: 100,
      height: 40,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#e3e3e3ff',
  },
  contentBubble: {
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
    color: '#333',
    fontSize: 54,
    fontWeight: 'bold',
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'flex-start',
  },
  texxt: {
    color: '#ff0000ff',
    fontSize: 12,
    marginTop: 3.4,
    marginLeft: 8,
  },
});