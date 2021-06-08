import React from 'react';

import axios from 'axios';
import {GlobalVariables} from "./global/variables";




export default class APIKit extends React.Component {


    public static getCategoriasList () {
        axios
            .get('https://trabajofinalapi.azurewebsites.net/categoria/lista')
            .then(function (response) {
                GlobalVariables.listaCategorias=JSON.stringify(response.data)
            })
            .catch(function (error) {
                alert(error.message);
            })
    }

    public static getProductoList () {
        axios
            .get('https://trabajofinalapi.azurewebsites.net/producto/lista')
            .then(function (response) {
                GlobalVariables.productoCategorias=JSON.stringify(response.data)
            })
            .catch(function (error) {
                alert(error.message);
            })
    }

    public static getreservaList (idUsuari) {
        axios
            .get('https://trabajofinalapi.azurewebsites.net /reserva/lista/usuario')
            .then(function (response) {
                GlobalVariables.listaReserva=JSON.stringify(response.data)
            })
            .catch(function (error) {
                alert(error.message);
            })
    }
}
