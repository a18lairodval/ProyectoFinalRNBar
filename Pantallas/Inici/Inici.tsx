import React, {Component, PureComponent} from 'react';
import { TouchableOpacity,Button,ScrollView, View, Text, TouchableHighlight,ImageBackground, Image} from 'react-native';
import Header from "./../Header/Header";
import { styles } from './Styles';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {GlobalVariables} from "../../global/variables";
import APIKit from "../../APIKit";



class Inici extends Component {

    private props: any;
    constructor(props: any) {
        super(props);

    }


    private categoria(item: any, index: number){
        return(
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    this.props.navigation.navigate('pantallProductes');
                    GlobalVariables.producteSeleccionat=item.id;
                    GlobalVariables.producteSeleccionatNom=item.nom;

                }}
            >
                <ImageBackground
                    style={styles.imagen}
                    imageStyle={{borderRadius: 6}}
                    source={item.imagen}
                >
                    <View style={styles.alinearVerticalmente}>
                        <Text style={styles.textos}>{item.nom}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    render() {
        const {state}=this.props.navigation;
        let arrayCategorias=[
            {
                "id":1,
                "nom":"Entrepans",
                "imagen":require("../../complementos/fotos/Iberico.jpg")
            },{
                "id":2,
                "nom":"Begudes",
                "imagen":require("../../complementos/fotos/agua.jpeg")
            },{
                "id":3,
                "nom":"Pastes",
                "imagen":require("../../complementos/fotos/Pasta.jpeg")
            },{
                "id":4,
                "nom":"Snaks",
                "imagen":require("../../complementos/fotos/snack.jpeg")
            }];

        return (
          <View style={styles.contenedor}>
              <Header navigation={this.props.navigation}/>
              <View style={styles.titol}>
                  <Text style={{fontSize: 20, fontWeight:'bold', margin: '5%'}}>Els nostres productes</Text>
              </View>
              {/*<ScrollView>*/}
                  <View style={styles.productos}>
                      <View style={styles.column}>
                          {arrayCategorias.map((item: any, index: number) => {
                              while (index < arrayCategorias.length / 2) {
                                  return (
                                      this.categoria(item, index)
                                  )
                              }
                          })}
                      </View>
                      <View style={styles.column}>
                          {arrayCategorias.map((item: any, index: number) => {
                              while (index >= arrayCategorias.length / 2) {
                                  return (
                                      this.categoria(item, index)
                                  )
                              }
                          })}
                      </View>
                  </View>
              {/*</ScrollView>*/}
          </View>
        );
    }
}
export default Inici;
