import React, { useState, Component } from 'react';
import {Text, View,ImageBackground,TouchableOpacity,Button,Modal,Pressable } from "react-native";
import { styles } from './Styles';
import {GlobalVariables} from "../../global/variables";
//import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';



const comandesProductes=[
    {
        "id":1,
        "temperatura":"fred",
        "nom":"Pernil",
        "descripcio": "Hola",
        "preu": "1.60",
    },{
        "id":2,
        "temperatura":"fred",
        "nom":"Nocilla",
        "descripcio": "Holaa",
        "preu": "1.70",
    },{
        "id":3,
        "temperatura":"fred",
        "nom":"Formatge",
        "descripcio": "Holaaa",
        "preu": "1.50",
    },{
        "id":4,
        "temperatura":"fred",
        "nom":"Fuet",
        "preu": "1.60",
    },{
        "id":5,
        "temperatura":"calent",
        "nom":"Frankfurt",
        "descripcio": "Holaaa",
        "preu": "2.00",
    },{
        "id":6,
        "temperatura":"calent",
        "nom":"Bacó",
        "preu": "1.60",
    },{
        "id":7,
        "temperatura":"calent",
        "nom":"Llom",
        "preu": "2.10",
    },{
        "id":8,
        "temperatura":"calent",
        "nom":"Hamburguesa",
        "preu": "2.20",
    }];

const modalPendientesVisible= false;
const modalTotalReservasVisible= false;
// const [modalVisible, setModalVisible] = useState(false);
class MenuLogin extends Component {

    printComanda(comanda: any){
        return(
            <View>
                <Text>Productes</Text>
                {comanda.productes.map((item: any) => {
                    return (
                        <View>
                            <Text>{item.nameProd}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    )
                })}
                <Text>Total {}</Text>
            </View>
        )
    }
    modalReservasPendientes(){
        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalPendientesVisible}
            >
                <View style={styles.centeredView}>
                    <Text>Todo OK</Text>
                </View>
            </Modal>
        )
    }
    render() {

        GlobalVariables.isLogged =true;
        GlobalVariables.userNom= "Laia Rodés";
        GlobalVariables.pedidosPendientes=[1,6,6,6];
        GlobalVariables.todosPedidos=[1,2,1,6,6,6]
        GlobalVariables.imagenLoged=require("../../complementos/iconos/provaImage.png");

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
                                    <Button title={pedidosPendientes} onPress={() =>{this.modalPendientesVisible=true}} />
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
                                {/*<Text>Log Out</Text>*/}
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
                    <Text style={{textAlign:'center', padding:'3%', color:'white'}}>0.0.1</Text>
                </View>
            </View>
        )
    }
}

export default MenuLogin;
