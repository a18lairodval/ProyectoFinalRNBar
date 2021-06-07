import React from 'react';

import axios from 'axios';
import {GlobalVariables} from "./global/variables";




export default class APIKit extends React.Component {


    public static getCategoriasList () {
        axios
            .get('pato/categoria/lista')
            .then(function (response) {
                GlobalVariables.listaCategorias=JSON.stringify(response.data)
            })
            .catch(function (error) {
                alert(error.message);
            })
    }
    public static getProductoList () {
        axios
            .get('pato/producto/lista')
            .then(function (response) {
                GlobalVariables.productoCategorias=JSON.stringify(response.data)
            })
            .catch(function (error) {
                alert(error.message);
            })
    }
}
