import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, SafeAreaView, Alert} from 'react-native';
import { styles } from './Styles';
import Header from "../Header/Header";
import Popup from 'react-native-popup';

const arrayProductes=[
    {
        "id":1,
        "temperatura":"fred",
        "nom":"Pernil",
        "descripcio": "Hola",
    },{
        "id":2,
        "temperatura":"fred",
        "nom":"Nocilla",
        "descripcio": "Holaa",
    },{
        "id":3,
        "temperatura":"fred",
        "nom":"Formatge",
        "descripcio": "Holaaa",
    },{
        "id":4,
        "temperatura":"fred",
        "nom":"Fuet",
    },{
        "id":5,
        "temperatura":"fred",
        "nom":"Pernil",
    },{
        "id":6,
        "temperatura":"fred",
        "nom":"Nocilla",
    },{
        "id":7,
        "temperatura":"fred",
        "nom":"Formatge",
    },{
        "id":8,
        "temperatura":"fred",
        "nom":"Fuet",
    },{
        "id":1,
        "temperatura":"calent",
        "nom":"Frankfurt",
        "descripcio": "Holaaa",
    },{
        "id":2,
        "temperatura":"calent",
        "nom":"Bacó",
    },{
        "id":3,
        "temperatura":"calent",
        "nom":"Llom",
    },{
        "id":4,
        "temperatura":"calent",
        "nom":"Hamburguesa",
    }];

    const arraySnacks=[
        {
            "id":1,
            "temperatura":"none",
            "nom": "Patates",
        },{
            "id":2,
            "temperatura": "none",
            "nom": "Piruletas",
        },{
            "id":3,
            "temperatura": "none",
            "nom": "Kinder bueno",
        },{
            "id":4,
            "temperatura": "none",
            "nom": "Kit kat",
        }
    ];

    const arrayBegudes=[
        {
            "id":1,
            "temperatura": "fred",
            "nom": "CocaCola",
        },{
            "id":2,
            "temperatura": "fred",
            "nom": "Fanta",
        },{
            "id":3,
            "temperatura": "fred",
            "nom": "Aigua",
        },{
            "id":4,
            "temperatura": "fred",
            "nom": "Aquarius",
        },{
            "id":5,
            "temperatura": "none",
            "nom": "Bifrutas",
        },{
            "id":6,
            "temperatura": "calent",
            "nom": "Cafe",
        },{
            "id":7,
            "temperatura": "calent",
            "nom": "Infusió",
        }
    ];

    const arrayPastes=[
        {
            "id":1,
            "temperatura": "none",
            "nom": "Donut",
            "descripcio": "a",
        },{
            "id":2,
            "temperatura": "none",
            "nom": "Caracola",
            "descripcio": "Adios",
        },{
            "id":3,
            "temperatura": "none",
            "nom": "Crosant",
            "descripcio": "Hola",
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
    
    private imprimirProductos(productes){
        console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
        console.log(productes)

        for(let i=0; i<productes.length;i++){
            console.log(productes[i])
            return(
                
                <View>
                    <Button title= {arrayProductes[productes[i]].nom}
                     onPress={() => Alert.alert(arrayProductes[productes[i]].descripcio)}></Button>
                     
                </View>
            )
        }
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
                    onPress={() => this.props.navigation.navigate('pantallaInici') }
                />
                <Text>Entrepans</Text>
                {producteNone.length==0?
                    <View>
                        <Text>Productes freds</Text>
                        <View>
                            {this.imprimirProductos(producteFred)}
                        </View>
                        <Text>Productes calents</Text>
                        <View>
                            {this.imprimirProductos(producteCalent)}
                        </View>
                    </View>
                    :
                    <View>
                        <Text>Snacks</Text>
                        {this.imprimirProductos(producteNone)}
                    </View>
                }
            </View>
        );
    }
}
export default Productes;


