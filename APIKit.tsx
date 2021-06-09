import React from 'react';

import axios from 'axios';
import {GlobalVariables} from "./global/variables";
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';




export default class APIKit extends React.Component {


    public static getCategoriasList () {
        axios
            .get('https://trabajofinalapi.azurewebsites.net/categoria/lista')
            .then(function (response) {
                GlobalVariables.listaCategorias=JSON.stringify(response.data)
            })
            .catch(function (error) {
                // alert(error.message);
            })
    }

    public static getProductoList () {
        axios
            .get('https://trabajofinalapi.azurewebsites.net/producto/lista')
            .then(function (response) {
                GlobalVariables.productoCategorias=JSON.stringify(response.data)
            })
            .catch(function (error) {
                // alert(error.message);
            })
    }

    public static getProducto (idProducto) {
        axios
            .get('https://trabajofinalapi.azurewebsites.net/producto')
            .then(function (response) {
                return JSON.stringify(response.data)
            })
            .catch(function (error) {
                // alert(error.message);
            })
    }

    public static getReservaList (idUsuari) {
        axios
            .get('https://trabajofinalapi.azurewebsites.net/reserva/lista/usuario?id='+idUsuari)
            .then(function (response) {
                GlobalVariables.listaReserva=JSON.stringify(response.data)
            })
            .catch(function (error) {
                // alert(error.message);
            })
    }

    public static postReservaList (array) {
        axios
            .post('https://trabajofinalapi.azurewebsites.net/reserva',{
                listReserva: array,
            })
            .then(function (response) {
                alert('Reserva finalizada');
            })
            .catch(function (error) {
                alert(error.message);
            })
    }
    public static postUsuari (info ){
        axios
            .post('client/register', {
                username: info.user.email,
                token: info.idToken,
                name: info.user.name,
                type: 'google',

            })
            .then(async (res) => {

            })
            .catch((error) => {

            });
    }
}
