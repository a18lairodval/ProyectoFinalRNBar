import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, ImageBackground, TouchableOpacity, Alert} from 'react-native';
//import carritoCompra from './../../complementos/iconos/carrito.png';
//import moneda from './../../complementos/iconos/moneda.png';
//import menu from './../../complementos/iconos/menu.png';
import { styles } from './Styles';
class Header extends Component {
    private props: any;
    constructor(props: any) {

        super(props);

        /* this.state = {

         }*/

    }

    render() {

        return (
            <View style={{
                height:50,
                backgroundColor: 'blue',
                display:'flex',
                alignContent:'center',
                algorithm:'center',
                flexDirection:'row'
            }}>
                <View style={{flex:20,
                    backgroundColor: 'red'}}>
                        <View style={{flex:1, backgroundColor:'orange'}}>
                            {/*<Image*/}
                            {/*    style={{  }}*/}
                            {/*    source={require('../../complementos/iconos/carrito.png')}*/}
                            {/*/>*/}
                        </View>
                </View>
                <View style={{flex:60}}>
                    <Text>hola</Text>
                </View>
                <View style={{flex:20,
                    backgroundColor: 'red'}}>
                    {/*<backgroundImage></backgroundImage>*/}
                </View>
            </View>
        );
    }
}
export default Header;
