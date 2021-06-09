import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contenedor: {
        width:'100%',
        height:'100%',
        display: 'flex',
    },
    componenteScroll:{

    },
    titol: {
        flex: 10,
        alignItems: 'center',
        // backgroundColor:'red'
    },
    productos: {
        flex: 90,
        display:'flex',
        flexDirection:'row'


    },
    button:{
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        borderRadius: 8,
        margin: 3,
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
        fontWeight: 'bold',
        width:'100%',
        fontSize: 24,
        textAlign: 'center'
    }
});
