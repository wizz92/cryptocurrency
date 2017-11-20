import React from 'react'
import {TouchableOpacity, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {setFiatCurrency, getCurrencies} from '../../actions';

const Button = props => (
    <TouchableOpacity style={styles.buttonStyle} onPress={() => {
        props.setFiatCurrency(props.fiatCurrency);
        props.getCurrencies(props.fiatCurrency);
    }}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </TouchableOpacity>
);

export default connect(null, {setFiatCurrency, getCurrencies})(Button);

const styles = {
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        padding: 25,
    }
};