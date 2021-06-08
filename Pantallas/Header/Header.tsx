import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, ImageBackground, TouchableOpacity, Alert} from 'react-native';
//import carritoCompra from './../../complementos/iconos/carrito.png';
//import moneda from './../../complementos/iconos/moneda.png';
//import menu from './../../complementos/iconos/menu.png';

import { styles } from './Styles';
import {GlobalVariables} from "../../global/variables";
class Header extends Component <any, any>{
    private _carousel: any;
    private props: any;
    constructor(props: any) {

        super(props);

        /* this.state = {

         }*/

    }

    render() {
        GlobalVariables.isLogged=true;
        GlobalVariables.credit=10.40;

        return (
            <View style={{
                height:50,
                backgroundColor:"#F5F5F5",
                display:'flex',
                alignContent:'center',
                algorithm:'center',
                flexDirection:'row'
            }}>
                <TouchableOpacity
                    style={{flex:20, alignContent: 'center', display: 'flex', justifyContent: 'center'}}
                    onPress={() => this.props.navigation.navigate('pantallaBocata')}
                >
                    <ImageBackground
                        style={{ flex:1, marginHorizontal: '12%', marginVertical:'7%'}}
                        resizeMode = "contain"
                        source={require('../../complementos/iconos/carrito.png')}
                    />
                    {GlobalVariables.productosCarritoId.length>0&& <View
                        style={{backgroundColor:'red', position:'absolute', left:'63%', bottom:'7%', paddingHorizontal:GlobalVariables.productosCarritoId.length>9?'4%':'8%', borderRadius:15}}>
                        <Text style={{textAlign:'center', color:'white', fontSize:12}}>{GlobalVariables.productosCarritoId.length}</Text>
                    </View>}
                </TouchableOpacity>
                <View style={{flex:60}}>
                    <View style={{width:'100%' , textAlign:'center', marginTop: 10}}>
                        {GlobalVariables.isLogged?
                            <View style={{display:'flex', flexDirection:'row' }}>
                                <View style={{flex:1}}/>
                                <Text style={{fontWeight: 'bold',fontSize: 23, alignSelf:'center'}}>Credit: {GlobalVariables.credit}€</Text>
                                {/*<Image source={require('../../complementos/iconos/moneda.png')}*/}
                                {/*       */}
                                {/*       style={{height: 30, width:30, backgroundColor:'blue'}}/>*/}
                                <View style={{flex:1}}/>
                            </View>
                            :
                            <Text style={{fontWeight: 'bold',fontSize: 18}}>CANTINA PEDRALBES</Text>}
                    </View>
                </View>
                <View style={{flex:20}}>
                    <View style={{flex:1, alignContent: 'center', display: 'flex', justifyContent: 'center'}}>
                        <TouchableOpacity
                            //style={styles.button}
                            onPress={() => {
                                //this.props.navigation.navigate('pantallProductes');
                                GlobalVariables.mainCarousel.snapToNext();
                            }}
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
