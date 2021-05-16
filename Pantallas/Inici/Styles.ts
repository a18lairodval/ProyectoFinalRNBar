import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedor: {
        width:'100%',
        height:'100%',
        display: 'flex',
        backgroundColor: 'orange'
    },
    titol: {
        flex: 10,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    productos: {
        flex: 90,
        display:'flex',
        flexDirection:'row'


    },
    contenedorProducto: {
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
    },
    column: {
        flex:50,
        alignItems: 'center',
        margin: 10,
    },
    imagen:{
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 8,
       // verticalAlign: 'middle',
        alignItems: 'center',

    },
    contenedorImg:{
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 8,
        margin: 10,
    },
    texto:{
        color:'white',
    }
});
