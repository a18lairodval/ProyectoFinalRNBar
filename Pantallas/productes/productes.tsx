import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, SafeAreaView, Alert} from 'react-native';
import { styles } from './Styles';
import Header from "../Header/Header";
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
                    <text>{productes[i]}</text>
                </View>
            )
        }
    }
    render() {
        let arrayProductes=[
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
                "id":1,
                "temperatura":"calent",
                "nom":"Frankfurt",
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
        })



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
                        <Text>Entra</Text>
                        {this.imprimirProductos(producteNone)}
                    </View>
                }
            </View>
        );
    }
}
export default Productes;
