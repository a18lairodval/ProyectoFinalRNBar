import React, {Component, PureComponent} from 'react';
import {Text, View,} from "react-native";

class Pedido extends Component{
    private props: any;
    constructor(props: any) {
        super(props);
    }
    render(){
        return(
            <View>
                <Text>Productes</Text>
                {/*{array.map((item: any, index: number) => {*/}
                {/*    return (*/}
                {/*        <Text>{item.name}</Text>*/}
                {/*        <Text>{item.price}</Text>*/}
                {/*    )*/}
                {/*})}*/}
                <Text>Total {}</Text>
            </View>
        )
    }
}
export default Pedido;
