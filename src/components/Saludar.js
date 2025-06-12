import PropTypes from "prop-types";
import React from "react";
import { Text } from "react-native";


export default function Saludar(props){
    const {firstname, lastname} = props;
    return(
        <Text>Hola {firstname} {lastname}</Text>
    );
}
Saludar.defaultProps = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}