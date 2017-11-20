import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

const CurrencyDetails = props => {
    const {
        rank,
        name,
        price_btc,
        percent_change_1h,
        percent_change_24h, 
        percent_change_7d, 
        max_supply, 
        available_supply} = props.selectedCurrency;
    
    const priceKey = props.fiatCurrency ? props.fiatCurrency.toLowerCase() : 'usd';
    const priceInFiatCurrency = props.selectedCurrency[`price_${priceKey}`];
    return (
        <View style={{marginTop: 120}}>
            <Text>Rank: {rank}</Text>
            <Text>Name: {name}</Text>
            <Text>Price, {priceKey}: {priceInFiatCurrency}</Text>
            <Text>Price in bitcoins: {price_btc}</Text>
            <Text>1h percent change: {percent_change_1h}</Text>
            <Text>24h percent change: {percent_change_24h}</Text>
            <Text>7d percent change: {percent_change_7d}</Text>
            <Text>Total supply: {max_supply}</Text>
            <Text>Available supply: {available_supply}</Text>
        </View>
    )
};

const mapStateToProps = state => ({
    selectedCurrency: state.selectedCurrency,
    fiatCurrency: state.fiatCurrency,
});

export default connect(mapStateToProps)(CurrencyDetails);