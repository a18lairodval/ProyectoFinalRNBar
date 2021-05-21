import React from "react";
import {Text, View,} from "react-native";
import Inici from "./Pantallas/Inici/Inici";
import Header from "./Pantallas/Header/Header";
import Productes from "./Pantallas/productes/productes";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import bocatas from "./Pantallas/Bocatas/bocatas";

const AppNavigator = createSwitchNavigator(
    {
        pantallaInici: Inici,
        pantallProductes: Productes,
        pantallaBocata: bocatas
    },
    {
        initialRouteName: "pantallaInici"
    }
);

const AppContainer = createAppContainer(AppNavigator);
class App extends React.Component {
  render() {
    return (
        <View style={{backgroundColor:"#FFFFFF", width: '100%', height: '100%'}}>
          {/*<Header/>*/}
          {/*<Inici/>*/}
            <AppContainer />
        </View>
    );
  }
}
export default App;
