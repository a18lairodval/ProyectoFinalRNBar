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
                backgroundColor:"#F5F5F5",
                display:'flex',
                alignContent:'center',
                algorithm:'center',
                flexDirection:'row'
            }}>
                <View style={{flex:20}}>
                    <View style={{flex:1, alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                        <TouchableOpacity
                            //style={styles.button}
                            onPress={() => this.props.navigation.navigate('pantallProductes')}
                        >
                            <ImageBackground
                                style={{ width:40, height: 40, marginLeft: '20%'}}
                                source={require('../../complementos/iconos/carrito.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex:60}}>
                    <Text style={{width:'100%', fontWeight: 'bold', textAlign:'center', marginTop: 10, fontSize: 18}}>CANTINA PEDRALBES</Text>
                </View>
                <View style={{flex:20}}>
                    <View style={{flex:1, alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                        <TouchableOpacity
                            //style={styles.button}
                            onPress={() => this.props.navigation.navigate('pantallProductes')}
                        >
                            <ImageBackground
                                style={{ width:40, height: 40, marginLeft: '20%'}}
                                source={require('../../complementos/iconos/menu.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
export default Header;
