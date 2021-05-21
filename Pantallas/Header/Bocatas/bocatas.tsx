import React, {Component, PureComponent} from 'react';
import { StyleSheet, View, Text, Image, Button, SafeAreaView, Alert} from 'react-native';
//import styles from "./Styles";

class bocatas extends Component{
    static navigationOptions =
    {
        title: 'bocatas',
    };

    render(){
        return(
           // <View style = {styles.texto}>
           <View>
                <Text>Entrepans</Text>
                <Text>Freds</Text>
                <Button title= 'Fuet'></Button>
                <Button title= 'Pernil dolç'></Button>
                <Button title= 'Formatge'></Button>
                <Button title= 'Pernil salat'></Button>
                <Button title= 'Llonganiça'></Button>
                <Text>Calents</Text>
                <Button title= 'Truita'></Button>
                <Button title= 'Truita de patates'></Button>
                <Button title= 'Hamburguesa'></Button>
                <Button title= 'Panini'></Button>
            </View>
        );
    }
}
export default bocatas