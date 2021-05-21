import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedor: {
        width:'100%',
        height:'100%',
        display: 'flex',
    },
    titol: {
        flex: 10,
        alignItems: 'center',
    },
    productos: {
        flex: 90,
        display:'flex',
        flexDirection:'row'


    },
    contenedorProducto: {
        width: '100%',
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
        alignItems:'center',

    },
    contenedorImg:{
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        borderRadius: 8,
        margin: 3,
    },
    alinearVerticalmente:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center',
        width: '100%',
        height: '100%',
        alignContent:'center'
    },
    textos:{
        color:'white',
        fontSize: 24,
    }
});
