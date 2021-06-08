import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, SafeAreaView, Alert, StyleSheet} from 'react-native';
import { styles } from './Styles';
import Header from "../Header/Header";
import Popup from 'react-native-popup';
import APIKit from "../../APIKit";
import {GlobalVariables} from "../../global/variables";


const arrayProductes=[
    {
        "id":1,
        "temperatura":"fred",
        "nom":"Pernil",
        "descripcio": "Hola",
        "preu": "1.60",
    },{
        "id":2,
        "temperatura":"fred",
        "nom":"Nocilla",
        "descripcio": "Holaa",
        "preu": "1.70",
    },{
        "id":3,
        "temperatura":"fred",
        "nom":"Formatge",
        "descripcio": "Holaaa",
        "preu": "1.50",
    },{
        "id":4,
        "temperatura":"fred",
        "nom":"Fuet",
        "preu": "1.60",
    },{
        "id":5,
        "temperatura":"calent",
        "nom":"Frankfurt",
        "descripcio": "Holaaa",
        "preu": "2.00",
    },{
        "id":6,
        "temperatura":"calent",
        "nom":"Bacó",
        "preu": "1.60",
    },{
        "id":7,
        "temperatura":"calent",
        "nom":"Llom",
        "preu": "2.10",
    },{
        "id":8,
        "temperatura":"calent",
        "nom":"Hamburguesa",
        "preu": "2.20",
    }];

    const arrayPastes=[
        {
            "id":1,
            "temperatura": "none",
            "nom": "Donut",
            "descripcio": "a",
            "preu": "1.00",
        },{
            "id":2,
            "temperatura": "none",
            "nom": "Caracola",
            "descripcio": "Adios",
            "preu": "1.10",
        },{
            "id":3,
            "temperatura": "none",
            "nom": "Crosant",
            "descripcio": "Hola",
            "preu": "1.40",
        }
    ];
    const arraySnacks=[
        {
            "id":1,
            "temperatura":"none",
            "nom": "Patates",
            "preu": "1,20",
        },{
            "id":2,
            "temperatura": "none",
            "nom": "Piruletas",
            "preu": "1,40",
        },{
            "id":3,
            "temperatura": "none",
            "nom": "Kinder bueno",
            "preu": "1,50",
        },{
            "id":4,
            "temperatura": "none",
            "nom": "Kit kat",
            "preu": "1,50",
        }
    ];   
    const arrayBegudes=[
        {
            "id":1,
            "temperatura": "fred",
            "nom": "CocaCola",
            "preu": "1,20",
        },{
            "id":2,
            "temperatura": "fred",
            "nom": "Fanta",
            "preu": "1,20",
        },{
            "id":3,
            "temperatura": "fred",
            "nom": "Aigua",
            "preu": "1,00",
        },{
            "id":4,
            "temperatura": "fred",
            "nom": "Aquarius",
            "preu": "1,20",
        },{
            "id":5,
            "temperatura": "none",
            "nom": "Bifrutas",
            "preu": "1,40",
        },{
            "id":6,
            "temperatura": "calent",
            "nom": "Cafe",
            "preu": "1,00",
        },{
            "id":7,
            "temperatura": "calent",
            "nom": "Infusió",
            "preu": "1,00",
        }
    ];
    
    
class Productes extends Component {
    private props: any;
    constructor(props: any) {
        super(props);
        this.props=props;
        /* this.state = {

         }*/
    }
    private imprimirProducto(producte){
        console.log('Productes '+ producte.nom)
        return(
            <View>
                <Button title= {producte.nom} 
                onPress={() => Alert.alert(
                    producte.nom, 
                    producte.preu,
                     [
                         {text: 'Afegir', onPress: ()=> console.log('Producte afegit')},
                         {text: 'Tornar', style: 'cancel'},
                     ],
                    )}/>
            </View>
        );
    }
    render() {
       
            let producteFred=[];
            let producteCalent=[];
            let producteNone=[];
        arrayProductes.map((item: any, index: number) => {
            if(item.temperatura=='calent'){
                producteCalent.push(index);
            }else if(item.temperatura=='fred'){
                producteFred.push(index);
            }else{
                producteNone.push(index);
            }
        });

        return (
            <View style={styles.contenedor}>
                <Header/>
                <Button
                    title= 'Tornar'
                    onPress={() =>  this.props.navigation.navigate('pantallaInici') }
                />
                <Text>Entrepans</Text>
                {producteNone.length==0?
                    <View>
                        <Text>Productes freds</Text>
                        <View>
                            {producteFred.map((item: any) => {
                                return this.imprimirProducto(arrayProductes[item]);
                            })}
                        </View>
                        <Text>Productes calents</Text>
                        <View>
                            {producteCalent.map((item: any) => {
                                return this.imprimirProducto(arrayProductes[item]);
                            })}
                        </View>
                    </View>
                    :
                    <View>
                        <Text>Snacks</Text>
                        {producteNone.map((item: any) => {
                            return this.imprimirProducto(arrayProductes[item]);
                        })}
                    </View>
                }
            </View>
        );
    }
}
export default Productes;

