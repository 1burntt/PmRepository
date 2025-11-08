import { View, Text } from "react-native"
import CustomButton from "../src/components/CustomButton"

export default function ProfileScreen(){
    const handleLogout = () =>{
        if(navigationRef.isReady()){
            navigationRef.reset({
                index: 0,

                routes: [{name: 'Login'}],
            })
        }
    }
    return(
        <View>
        <Text>Pantalla de Perfil</Text>
        <CustomButton title = "Cerrar Sesion" onPress = {handleLogout}/>
        </View>
    )
}