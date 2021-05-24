import React, {Component, PureComponent} from 'react';
import { StyleSheet, View, Text, Image, Button, SafeAreaView, Alert} from 'react-native';
import Header from "../Header/Header";
//import styles from "./Styles";

class bocatas extends Component{
    private props: any;
    constructor(props: any) {
        super(props);
            this.props=props;
        /* this.state = {

         }*/

    }
    static navigationOptions =
    {
        title: 'bocatas',
    };

    render(){
        const {state}=this.props.navigation
        return(
           // <View style = {styles.texto}>
           <View>
               <Header/>
               <Button
                   title= 'Tornar'
                   onPress={() => this.props.navigation.navigate('pantallaInici') }
               />
                <Text>Entrepans</Text>
                <Text>Freds</Text>
                <Button title= 'Fuet'> </Button>
                <Button title= 'Pernil dolç'> </Button>
                <Button title= 'Formatge'> </Button>
                <Button title= 'Pernil salat'> </Button>
                <Button title= 'Llonganiça'> </Button>
                <Text>Calents</Text>
                <Button title= 'Truita'> </Button>
                <Button title= 'Truita de patates'> </Button>
                <Button title= 'Hamburguesa'> </Button>
                <Button title= 'Panini'> </Button>
            </View>
        );
    }
}
export default bocatas;
