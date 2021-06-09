import React, { useState, Component } from 'react';
import {Text, View,ImageBackground,TouchableOpacity,Button,Modal, Image } from "react-native";
import { styles } from './Styles';
import {GlobalVariables} from "../../global/variables";
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
// import AsyncStorage from '@react-native-community/async-storage';
import APIKit from "../../APIKit";

// GoogleSignin.configure({
//     webClientId: '',// id google usuarios
//     offlineAccess: true,
//     forceCodeForRefreshToken: true,
//     accountName: '',
// });
//
// async function signOut(){
//     try {
//         await GoogleSignin.revokeAccess();
//         await GoogleSignin.signOut();
//     } catch (error) {
//         console.error(error);
//     }
// }


GlobalVariables.pedidos=[
    {
        "id":1,
        "preu":1.6,
        "usuario":"Pernil",
        "estado": "Pendent",
        "llistaItems": [1,2]

    },{
        "id":2,
        "preu":1.4,
        "usuario":"Pernil",
        "estado": "Finalitzat",
        "llistaItems": [3,4]
    }];

// const modalPendientesVisible= true;
const modalTotalReservasVisible= false;
// const [modalVisible, setModalVisible] = useState(false);

class MenuLogin extends Component {
    // GooglesignIn = async () => {
    //     try {
    //         await GoogleSignin.hasPlayServices();
    //         const info = await GoogleSignin.signIn();
    //         APIKit.postUsuari(info)
    //     } catch (error) {
    //        alert('Error al iniciar sesion, intentalo más tarde')
    //     }
    // };

    printComanda(comanda: any){
        return(
            <View>
                <Text>Productes</Text>
                {comanda.llistaItems.map((item: any) => {
                    let producto=APIKit.getProducto (item.usuario);
                    return (
                        <View>
                            {/*<Text>{producto.nom}</Text>*/}
                            {/*<Text>{producto.preu}</Text>*/}
                            <Text>Entra</Text>
                        </View>
                    )
                })}
                <Text>Total {}</Text>
            </View>
        )
    }
    modalReservas(reservas){
        return(
            <Modal
                animationType="slide"
                transparent={true}
                // visible={modalPendientesVisible}
            >
                <View style={styles.centeredView}>
                    {reservas.map((item: any) => {
                        this.printComanda(item);
                    })}
                </View>
            </Modal>
        )
    }
    render() {
        let arrayPendientes=[];
        GlobalVariables.pedidos.map((item: any) => {
            if(item.estado=="Pendent"){
                arrayPendientes.push(item);
            }
        });

        // GlobalVariables.isLogged =false;
        GlobalVariables.userNom= "Laia Rodés";

        GlobalVariables.imagenLoged=require("../../complementos/iconos/provaImage.png");

        let pedidosPendientes;

        if (arrayPendientes.length==1)
            pedidosPendientes = '1 comanda';
        else if (arrayPendientes.length>1)
            pedidosPendientes = arrayPendientes.length+ ' comandes';

        let totalPedidos;
        if (GlobalVariables.pedidos.length==1)
            totalPedidos = '1 comanda';
        else if (GlobalVariables.pedidos.length>1)
            totalPedidos = GlobalVariables.pedidos.length+ ' comandes';

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
                                {arrayPendientes.length==0?
                                    <Text style={styles.textInfo}>Cap</Text>:
                                    <Button title={pedidosPendientes}  />//onPress={() =>{this.modalPendientesVisible=true}}
                                }
                            </View>
                            <View style={styles.contentInfo}>
                                <Text style={styles.textInfo}>Comandes realitzades: </Text>
                                {GlobalVariables.pedidos.length==0?
                                    <Text style={styles.textInfo}>Cap</Text>:
                                    <Button title={totalPedidos} onPress={() =>console.log("TodoOk")} />
                                }
                            </View>
                            <View style={styles.contentButton}>
                                {/*<View style={{flex:1}}/>*/}
                                <TouchableOpacity
                                    style={styles.buttonGoogle}
                                    // onPress={() => this.signOut()}
                                >
                                    <Text style={styles.submitButtonText}>Desconectarse</Text>
                                </TouchableOpacity>
                                {/*<View style={{flex:1}}/>*/}
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
                            <View style={styles.contentButton}>
                                {/*<View style={{flex:1}}/>*/}
                                <TouchableOpacity
                                    style={styles.buttonGoogle}
                                    // onPress={() => this.GooglesignIn()}
                                >
                                    <Text style={styles.submitButtonText}>Conectarse amb google</Text>
                                </TouchableOpacity>
                                {/*<View style={{flex:1}}/>*/}
                            </View>
                        </View>
                    </View>
                }
                <View style={{flex:1,display: 'flex', justifyContent:'flex-end', alignContent: 'flex-end', flexDirection: 'column'}}>
                    <Text style={{textAlign:'center', padding:'3%', color:'white'}}>0.0.1</Text>
                </View>
            </View>
        )
    }
}

export default MenuLogin;
