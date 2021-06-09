import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, TouchableOpacity} from 'react-native';
import { styles } from './Styles';
import Header from "../Header/Header";
import Popup from 'react-native-popup';
import APIKit from "../../APIKit";
import {GlobalVariables} from "../../global/variables";

const arrayEntrepans=[
    {
        "id":1,
        "temperatura":"fred",
        "nom":"Pernil",
        "descripcio": "Hola",
        "preu": 1.60,
    },{
        "id":2,
        "temperatura":"fred",
        "nom":"Nocilla",
        "descripcio": "Holaa",
        "preu": 1.70,
    },{
        "id":3,
        "temperatura":"fred",
        "nom":"Formatge",
        "descripcio": "Holaaa",
        "preu": 1.50,
    },{
        "id":4,
        "temperatura":"fred",
        "nom":"Fuet",
        "preu": 1.60,
    },{
        "id":5,
        "temperatura":"calent",
        "nom":"Frankfurt",
        "descripcio": "Holaaa",
        "preu": 2.00,
    },{
        "id":6,
        "temperatura":"calent",
        "nom":"Bacó",
        "preu": 1.60,
    },{
        "id":7,
        "temperatura":"calent",
        "nom":"Llom",
        "preu": 2.10,
    },{
        "id":8,
        "temperatura":"calent",
        "nom":"Hamburguesa",
        "preu": 2.20,
    }];
const arrayPastes=[
    {
        "id":9,
        "temperatura": "none",
        "nom": "Donut",
        "descripcio": "a",
        "preu": 1.00,
    },{
        "id":10,
        "temperatura": "none",
        "nom": "Caracola",
        "descripcio": "Adios",
        "preu": 1.10,
    },{
        "id":11,
        "temperatura": "none",
        "nom": "Crosant",
        "descripcio": "Hola",
        "preu": 1.40,
    }
];
const arraySnacks=[
    {
        "id":12,
        "temperatura":"none",
        "nom": "Patates",
        "preu": 1.20,
    },{
        "id":13,
        "temperatura": "none",
        "nom": "Piruletas",
        "preu": 1.40,
    },{
        "id":14,
        "temperatura": "none",
        "nom": "Kinder bueno",
        "preu": 1.50,
    },{
        "id":15,
        "temperatura": "none",
        "nom": "Kit kat",
        "preu": 1.50,
    }
];
const arrayBegudes=[
    {
        "id":16,
        "temperatura": "fred",
        "nom": "CocaCola",
        "preu": 1.20,
    },{
        "id":17,
        "temperatura": "fred",
        "nom": "Fanta",
        "preu": 1.20,
    },{
        "id":18,
        "temperatura": "fred",
        "nom": "Aigua",
        "preu": 1.00,
    },{
        "id":19,
        "temperatura": "fred",
        "nom": "Aquarius",
        "preu": 1.20,
    },{
        "id":20,
        "temperatura":"calent",
        "nom": "Bifrutas",
        "preu": 1.40,
    },{
        "id":21,
        "temperatura": "calent",
        "nom": "Cafe",
        "preu": 1.00,
    },{
        "id":22,
        "temperatura": "calent",
        "nom": "Infusió",
        "preu": 1.00,
    }];

class Productes extends Component {
    private props: any;
    constructor(props: any) {
        super(props);
        this.props=props;
        /* this.state = {

         }*/
    }
    addProducte(producte) {
        let anyadidoCarrito = false;
        let array = GlobalVariables.productosCarritoId;
        for (let i = 0; i < array.length && !anyadidoCarrito; i++) {
            if (array[i] == producte.id) {
                console.log(array[i] == producte.id)
                anyadidoCarrito = true;
            }
        }
        if (!anyadidoCarrito) {
            console.log(array)
            array.push(producte.id);
            GlobalVariables.productosCarritoId = array;
            this.props.navigation.navigate('pantallaInici')
        }else{
            alert("Aquest producta ja s'ha afegit")
        }
    }
    private imprimirProducto(producte){
        console.log('Productes '+ producte.nom)
        return(
            <View>
                <TouchableOpacity
                    style={{margin:'1%', backgroundColor: '#00acef', height:25, alignItems:'center',  borderRadius:15, padding:3}}
                    onPress={() =>{this.addProducte(producte)}}
                // onPress={() => Alert.alert(
                //     producte.nom,
                //     producte.preu,
                //      [
                //          {text: 'Afegir', onPress: ()=> console.log('Producte afegit')},
                //          {text: 'Tornar', style: 'cancel'},
                //      ],
                //     )}
                >
                    <Text style={{color:'white'}}>{producte.nom+'      '+producte.preu+'€'}</Text>
                </TouchableOpacity>




            </View>
        );
    }
    render() {
        let arrayProductes;
        if(GlobalVariables.producteSeleccionat==1){
            arrayProductes=arrayEntrepans;
        }else if(GlobalVariables.producteSeleccionat==2){
            arrayProductes=arrayBegudes;
        }else if(GlobalVariables.producteSeleccionat==3){
            arrayProductes=arrayPastes;
        }else{
            arrayProductes=arraySnacks;
        }
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

                <Text style={{fontSize:30, textAlign:'center', fontWeight:'bold', marginTop:30}}>{GlobalVariables.producteSeleccionatNom}</Text>
                {producteNone.length==0?
                    <View>
                        <Text style={{fontSize:20,  marginTop:30}}>Productes freds</Text>
                        <View>
                            {producteFred.map((item: any) => {
                                return this.imprimirProducto(arrayProductes[item]);
                            })}
                        </View>
                        <Text style={{fontSize:20, marginTop:30}}>Productes calents</Text>
                        <View>
                            {producteCalent.map((item: any) => {
                                return this.imprimirProducto(arrayProductes[item]);
                            })}
                        </View>
                    </View>
                    :
                    <View style={{marginTop:30}}>
                        {producteNone.map((item: any) => {
                            return this.imprimirProducto(arrayProductes[item]);
                        })}
                    </View>
                }
                <View style={{width:'100%', alignItems:'flex-end', padding:20}}>
                    <View style={{width:100, marginTop:50}}>
                        <Button
                            title= 'Tornar'
                            butonStyle={{borderRadius: 15}}

                            onPress={() =>  this.props.navigation.navigate('pantallaInici') }
                        />
                    </View>
                </View>
            </View>
        );
    }
}
export default Productes;

