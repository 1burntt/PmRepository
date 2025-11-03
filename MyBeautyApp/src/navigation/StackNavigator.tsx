import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Login: undefined,
    Home: {email: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// export default function StackNavigator() {
//     return(
//         <Stack.Navigator initialRouteName = 'Login' screenOptions={{ headerShown: false }} >
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//     );
// }