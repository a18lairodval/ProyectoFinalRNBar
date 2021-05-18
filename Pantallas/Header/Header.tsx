import React, {Component, PureComponent} from 'react';
import { View, Text, Image, Button, SafeAreaView, Alert} from 'react-native';
//import carritoCompra from './../../complementos/iconos/carrito.png';
//import moneda from './../../complementos/iconos/moneda.png';
//import menu from './../../complementos/iconos/menu.png';
import { styles } from './Styles';
class Inici extends Component {
    constructor(props: any) {
        super(props);

        /* this.state = {

         }*/

    }

    render() {

        return (
            <View style={styles.contenedor}>
                <View style={styles.carrito}>
                    <backgroundImage ></backgroundImage>
                </View>
                <View style={styles.dinero}>
                    <Text>hola</Text>
                </View>
                <View style={styles.menu}>
                    <backgroundImage></backgroundImage>
                </View>
            </View>
        );
    }
}
export default Inici;
