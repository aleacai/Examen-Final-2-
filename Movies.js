import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import {Card } from 'react-native-elements';
import { CineContext } from './Context';





const Movies = ({navigation}) => {
    const {cartelera, fun_compra} = useContext(CineContext);
    return (
        <View style={styles.container}>
            
            <ScrollView>

                <StatusBar style="auto" />

               
                {cartelera.map((p) => (
                    <Card containerStyle={{
                        backgroundColor:'#fffbbb',
                    }}>
                        <Card.Title>{p.nombre}</Card.Title>
                        <View>
                            <View style={styles.container3}>
                                <Card.Image style={styles.logo} source={{ uri: p.url }} />
                                <Text>{p.clasificacion}</Text>
                                <Text>{p.idioma}</Text>
                            </View>
                            
                            <View style={styles.container2}>
                            {p.horarios.map((b,index) =>
                                <Button
                                key={index}
                                    title={b}
                                    color="black"
                                    onPress={() => {
                                        navigation.navigate('Ticket');
                                        fun_compra(p.codigo,b);
                                    }}
                                />
                            )}
                            </View>
                        </View>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}
export default Movies;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
        
    },
    container2: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row'
      },
      container3:{
          flex:1,
          alignItems:'center'
      },
    logo: {
        height: 225,
        width: 150,
        
      },
});