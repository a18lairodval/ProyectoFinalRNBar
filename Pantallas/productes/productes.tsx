import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, SafeAreaView, Alert} from 'react-native';
import { styles } from './Styles';
import Header from "../Header/Header";

const arrayProductes=[
    {
        "id":1,
        "temperatura":"fred",
        "nom":"Pernil",
    },{
        "id":2,
        "temperatura":"fred",
        "nom":"Nocilla",
    },{
        "id":3,
        "temperatura":"fred",
        "nom":"Formatge",
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
        "id":9,
        "temperatura":"calent",
        "nom":"Frankfurt",
    },{
        "id":10,
        "temperatura":"calent",
        "nom":"Bacó",
    },{
        "id":11,
        "temperatura":"calent",
        "nom":"Llom",
    },{
        "id":12,
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
        },{
            "id":2,
            "temperatura": "none",
            "nom": "Caracola",
        },{
            "id":3,
            "temperatura": "none",
            "nom": "Crosant",
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
                <Button title= {producte.nom}> </Button>
            </View>
        )
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
                            {producteFred.map((item: any) => {
                                this.imprimirProducto(arrayProductes[item]);
                            })}
                        </View>
                        <Text>Productes calents</Text>
                        <View>
                            {producteCalent.map((item: any) => {
                                this.imprimirProducto(arrayProductes[item]);
                            })}
                        </View>
                    </View>
                    :
                    <View>
                        <Text>Snacks</Text>
                        {producteNone.map((item: any) => {
                            this.imprimirProducto(arrayProductes[item]);
                        })}
                    </View>
                }
            </View>
        );
    }
}
export default Productes;


