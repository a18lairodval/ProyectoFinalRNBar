import React from "react";
import {Text, View,} from "react-native";
import Inici from "./Pantallas/Inici/Inici";
import Header from "./Pantallas/Header/Header";
class App extends React.Component {
  render() {
    return (
        <View style={{backgroundColor:"red", width: '100%', height: '100%'}}>
          <Header/>
          <Inici/>
        </View>
    );
  }
}
export default App;
