import React, {Component, PureComponent} from 'react';
import { TouchableOpacity,Button, View, Text, TouchableHighlight,ImageBackground, Image} from 'react-native';
import Header from "./../Header/Header";
import { styles } from './Styles';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
class Inici extends Component {
    private props: any;
    constructor(props: any) {
        super(props);

        /* this.state = {

         }*/

    }


    render() {

        return (
          <View style={styles.contenedor}>
              <Header/>
              <View style={styles.titol}>
                <Text>Nuestros productos</Text>
              </View>
              <View style={styles.productos}>
                  <View style={styles.column}>
                      <View
                        style={styles.contenedorImg}
                      >
                          <TouchableOpacity
                              style={styles.button}
                              onPress={() => this.props.navigation.navigate('pantallProductes')}
                          >
                              <ImageBackground
                                  style={styles.imagen}
                                  imageStyle={{borderRadius: 6}}
                                  source={require('../../complementos/fotos/Iberico.jpg')}
                              >
                                  <View style={styles.alinearVerticalmente}>
                                      <Text style={styles.textos}>Bocatas</Text>
                                  </View>
                              </ImageBackground>
                          </TouchableOpacity>
                      </View>
                      <View
                          style={styles.contenedorImg}
                      >
                          <TouchableOpacity
                              style={styles.button}
                              onPress={() => this.props.navigation.navigate('pantallProductes')}
                          >
                              <ImageBackground
                                  style={styles.imagen}
                                  imageStyle={{borderRadius: 6}}
                                  source={require('../../complementos/fotos/Iberico.jpg')}
                              >
                                  <View style={styles.alinearVerticalmente}>
                                      <Text style={styles.textos}>Bocatas</Text>
                                  </View>
                              </ImageBackground>
                          </TouchableOpacity>
                      </View>
                  </View>
                  <View style={styles.column}>
                      <View
                          style={styles.contenedorImg}
                      >
                          <TouchableOpacity
                              style={styles.button}
                              onPress={() => this.props.navigation.navigate('pantallProductes')}
                          >
                              <ImageBackground
                                  style={styles.imagen}
                                  imageStyle={{borderRadius: 6}}
                                  source={require('../../complementos/fotos/Iberico.jpg')}
                              >
                                  <View style={styles.alinearVerticalmente}>
                                      <Text style={styles.textos}>Bocatas</Text>
                                  </View>
                              </ImageBackground>
                          </TouchableOpacity>
                      </View>

                      <View
                          style={styles.contenedorImg}
                      >
                          <TouchableOpacity
                              style={styles.button}
                              onPress={() => this.props.navigation.navigate('pantallProductes')}
                          >
                              <ImageBackground
                                  style={styles.imagen}
                                  imageStyle={{borderRadius: 6}}
                                  source={require('../../complementos/fotos/Iberico.jpg')}
                              >
                                  <View style={styles.alinearVerticalmente}>
                                      <Text style={styles.textos}>Bocatas</Text>
                                  </View>
                              </ImageBackground>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>
          </View>
        );
    }
}
export default Inici;
