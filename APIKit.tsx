import React from 'react';

import axios from 'axios';
import {GlobalVariables} from "./global/variables";




export default class APIKit extends React.Component {


    public static getCategoriasList () {
        axios
            .get('pato/categoria/lista')
            .then(function (response) {
                GlobalVariables.palabra=JSON.stringify(response.data)
            })
            .catch(function (error) {
                alert(error.message);
            })
    }



    render() {
        return (
            <ul>
                { GlobalVariables.palabra.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}
