import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import {Card } from 'react-native-elements';
import { CineContext } from './Context';





const Compra_ = ({navigation}) => {
    const {compra, calcular, cancelar, comprar} = useContext(CineContext);
    return (
        <View style={styles.container}>
            
            <ScrollView>

                <StatusBar style="auto" />

               
                
                    <Card containerStyle={{
                        backgroundColor:'#fffbbb',
                        
                    }}>
                    <Card.Title>{compra.nombre}</Card.Title>
                    <View>
                      <Text>Horario: {compra.horario}</Text>
                      <Text>{compra.idioma}</Text>
                      {compra.total >= 0 ?
                      <View>
                      <TextInput
                        placeholder="Cantidad"
                        keyboardType="numeric"
                        onChangeText={e => calcular(e, compra)}
                        value={compra.cantidad}
                        
                      />
                       <Text>${(Number(compra.total)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                       </View>
                       :
                       <View>
                       <TextInput
                        placeholder="Cantidad"
                        keyboardType="numeric"
                        
                        value="0"
                        
                      />
                       <Text>$0.00</Text>
                       </View>
                      }
                    </View>
                    <View>
                      <Button title="Cancelar" color="#943838" onPress={()=>{navigation.goBack(); cancelar(compra)}} />
                      <Button title="Comprar"  color="#389440" onPress={()=>{navigation.goBack(); comprar(compra)}}/>
                  </View>
                  </Card>
                
            </ScrollView>
        </View>
    );
}
export default Compra_;

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