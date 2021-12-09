import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Movies from "./Movies";
import Compra_ from "./Compra";

const Stack = createNativeStackNavigator();

export default function StackNavigator(){
    return(
        
        <Stack.Navigator>
            <Stack.Screen name="Pelis" component={Movies} options={{headerShown: false}}/>
            <Stack.Screen name="Ticket" component={Compra_} options={{headerShown: false}}/>
            
        </Stack.Navigator>
        
        
    )
}