import React, {Component} from 'react';
import {View, Text, Button,} from 'react-native';

import {GlobalVariables} from "../../global/variables";
import Header from "../Header/Header";
import {styles} from "../Inici/Styles";
import APIKit from "../../APIKit";

class Carrito extends Component <any, any>{
    private _carousel: any;
    private props: any;
    constructor(props: any) {

        super(props);

        /* this.state = {

         }*/

    }

    render() {
        let total=0;
        return (
            <View style={{width:'100%', height:'100%'}}>
                <Header navigation={this.props.navigation}/>
                <View style={{}}>
                    <View>
                        <Text>Productos de la cesta</Text>
                        {/*{GlobalVariables.productosCarritoId.map((item: any) => {*/}
                        {/*    let producto=APIKit.getProducto (item);*/}
                        {/*    total+=producto.preu;*/}
                        {/*    return(*/}
                        {/*        <View>*/}
                        {/*            <text>{producto.nom}</text>*/}
                        {/*            <Text>{producto.preu}</Text>*/}
                        {/*        </View>*/}
                        {/*    )*/}
                        {/*})}*/}
                        <Text>Total: {total}€</Text>
                    </View>
                    <View>
                        <Button title= 'Tornar' onPress={()=>this.props.navigation.navigate('pantallaInici')}/>
                        <Button title= 'Finalitzar' onPress={()=>{
                            APIKit.postReservaList(GlobalVariables.productosCarritoId);
                            GlobalVariables.productosCarritoId=[];
                            this.props.navigation.navigate('pantallaInici');
                        }}/>
                    </View>
                </View>
            </View>

        );
    }
}
export default Carrito;
