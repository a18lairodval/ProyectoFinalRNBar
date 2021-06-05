import React from "react";
import {Text, View,} from "react-native";
import Inici from "./Pantallas/Inici/Inici";
import Header from "./Pantallas/Header/Header";
import Productes from "./Pantallas/productes/productes";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import bocatas from "./Pantallas/Bocatas/bocatas";
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import {GlobalVariables} from "./global/variables";

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

function renderCarouselItem(itemAndIndex) {
    //console.log("index: " + itemAndIndex["index"].toString());
    if (itemAndIndex["index"] == 0) {
        return (
            <View style={{backgroundColor:"#FFFFFF", width: '100%', height: '100%'}}>
                {/*<Header/>*/}
                <AppContainer />
            </View>
        );
    } else {
        return (
            <Text>Login</Text>
        );
    }
}

const windowWidth = Dimensions.get('window').width;

const AppContainer = createAppContainer(AppNavigator);
class App extends React.Component {

    render() {
        // ref={(c) => { this._carousel = c; }}
        // data={[null, null]}
        // renderItem={(item, index) => renderCarouselItem(item, index)}
        // scrollEnabled={false}
        return (
            <Carousel
                ref={(c) => { GlobalVariables.mainCarousel = c; }}
                data={[null, null]}
                renderItem={renderCarouselItem}
                sliderWidth={windowWidth}
                itemWidth={windowWidth}
                windowSize={windowWidth}
                scrollEnabled={false}
            />
        );
    }
}
export default App;
