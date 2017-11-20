import axios from 'axios';
import {Actions} from 'react-native-router-flux';

export const getCurrencies = fiatCurrency => {
    const urlBase = 'https://api.coinmarketcap.com/v1/ticker/';
    const url = (fiatCurrency) ? (urlBase + `?convert=${fiatCurrency}`) : (urlBase);
    return dispatch => axios.get(url).then(response => dispatch({
        type: 'GET_CURRENCIES_SUCCESS',
        payload: response.data
    }))
};

export const showCurrencyDetails = id => dispatch => {
    dispatch ({
        type: 'SHOW_CURRENCY_DETAILS',
        payload: id
    });
    Actions.currencyDetails();
};

export const setFiatCurrency = fiatCurrency => ({
    type: 'SET_FIAT_CURRENCY',
    payload: fiatCurrency
});
