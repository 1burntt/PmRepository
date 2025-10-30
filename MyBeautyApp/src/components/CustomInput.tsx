import {View, Text, StyleSheet,TextInput,Button, TouchableOpacity} from 'react-native';
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import { useState } from 'react';
type Props = {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    required?: boolean;

 
}
export default function CustomInput({type= "text", required,placeholder,value,onChangeText}: Props) {
    const [isSecureText,setIsSecureText] = useState (type === "password");
    const icon = type === "email" ? "email" : type === "password" ? "lock" : "email";

    
     //input del wrapper
    return (
        <View style={styles.wrapper}>
           
        <View style={styles.inputWrapper}>
      <MaterialIcons name={icon as any} size={24} color="#333" />
      <TextInput 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={() => {}}
      secureTextEntry={isSecureText}
      style={styles.input}
      />
     {type === "password" && ( 
      <TouchableOpacity
      onPress={ 
        () => {
            setIsSecureText(!isSecureText);
      }
    }
       >
        
        <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={24} color="#000000ff" />
      </TouchableOpacity>
      )}
        </View>
        </View>
    );
}

        
       
const styles = StyleSheet.create({
  wrapper: {
    width: '95%',
   
  },
  inputWrapper: {

    flexDirection: 'row',
    alignItems: 'center',

     height: 50, 
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: '#ff0000ff',
    paddingHorizontal: 13,
    paddingVertical: 5,
    backgroundColor: '#ffffffff',
    width: '100%',
  },
  input: {

    flex: 1,
    marginLeft: 1.5,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});