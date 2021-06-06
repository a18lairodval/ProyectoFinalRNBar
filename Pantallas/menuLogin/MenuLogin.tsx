import React, {Component} from 'react';
import {Text, View,ImageBackground,TouchableOpacity,Button,} from "react-native";
import { styles } from './Styles';
import {GlobalVariables} from "../../global/variables";
//import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';



class MenuLogin extends Component {
    render() {
        GlobalVariables.isLogged =false;
        GlobalVariables.userNom= "Laia Rodés";
        GlobalVariables.pedidosPendientes=[1,6,6,6];
        GlobalVariables.todosPedidos=[1,2,1,6,6,6]
        GlobalVariables.imagenLoged=require("../../complementos/iconos/provaImage.png");
        GlobalVariables.version='0.0.0';

        let pedidosPendientes;
        if (GlobalVariables.pedidosPendientes.length==1)
            pedidosPendientes = '1 comanda';
        else if (GlobalVariables.pedidosPendientes.length>1)
            pedidosPendientes = GlobalVariables.pedidosPendientes.length+ ' comandes';

        let totalPedidos;
        if (GlobalVariables.todosPedidos.length==1)
            totalPedidos = '1 comanda';
        else if (GlobalVariables.todosPedidos.length>1)
            totalPedidos = GlobalVariables.todosPedidos.length+ ' comandes';
        return (
            <View style={styles.pantallaMenu}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.imagen}
                        onPress={() => GlobalVariables.mainCarousel.snapToPrev()}
                    >
                        <ImageBackground
                            style={styles.icon}
                            source={require("../../complementos/iconos/redCross.png")}
                        />
                    </TouchableOpacity>
                </View>
                {GlobalVariables.isLogged?
                    <View style={styles.contentLogin}>
                        <View style={styles.logoGoogle}>
                            <ImageBackground
                                imageStyle={{borderRadius: 100}}
                                style={styles.icon}
                                source={GlobalVariables.imagenLoged}
                            />
                        </View>
                        <View style={styles.benvinguda}>
                            <Text style={styles.textStyle}>Hola, {GlobalVariables.userNom}</Text>
                            <View style={styles.line}/>
                        </View>
                        <View style={styles.infoUser}>
                            <View style={styles.contentInfo}>
                                <Text style={styles.textInfo}>Credit actual:</Text>
                                <Text style={styles.textInfo}>{GlobalVariables.credit}€</Text>
                            </View>
                            <View style={styles.contentInfo}>
                                <Text style={styles.textInfo}>Comandes pendents: </Text>
                                {GlobalVariables.pedidosPendientes.length==0?
                                    <Text style={styles.textInfo}>Cap</Text>:
                                    <Button title={pedidosPendientes} onPress={() =>console.log("TodoOk")} />
                                }
                            </View>
                            <View style={styles.contentInfo}>
                                <Text style={styles.textInfo}>Comandes realitzades: </Text>
                                {GlobalVariables.todosPedidos.length==0?
                                    <Text style={styles.textInfo}>Cap</Text>:
                                    <Button title={totalPedidos} onPress={() =>console.log("TodoOk")} />
                                }
                            </View>
                            <View>
                                {/*Aqui va boton log Out*/}
                            </View>
                        </View>
                    </View>
                    :
                    <View style={styles.contentLogin}>
                        <View style={styles.logoPedralbes}>
                            <ImageBackground
                                imageStyle={{borderRadius: 20}}
                                style={styles.icon}
                                source={require("../../complementos/iconos/logo2.png")}
                            />
                        </View>
                        <View style={styles.contingutPromo}>
                            <Text style={styles.textStyle}>Registra't i gaudeix dels nostres productes</Text>
                        </View>
                        <View>
                            {/*Aqui va el boton login*/}
                        </View>
                    </View>
                }
                <View style={{flex:1,display: 'flex', justifyContent:'flex-end', alignContent: 'flex-end', flexDirection: 'column'}}>
                    <Text style={{textAlign:'center', padding:'3%', color:'white'}}>{GlobalVariables.version}</Text>
                </View>
            </View>
        )
    }
}

export default MenuLogin;
