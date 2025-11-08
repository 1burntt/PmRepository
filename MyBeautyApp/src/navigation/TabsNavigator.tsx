import { View } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

export type TabsParamList = {
    Home: undefined,
    Profile: undefined,
}

const Tab = createBottomTabNavigator<TabsParamList>();

export default function(){
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreen} options = {{title: 'Inicio'}}/>
            <Tab.Screen name = "Profile" component = {ProfileScreen} options = {{title: 'Perfil'}}/>
        </Tab.Navigator>
    )
}
