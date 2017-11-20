 const initialState = {
     currencies: [],
     fiatCurrency:'usd',
     selectedCurrency: {}
 }
 export default (state=initialState,action) => {
    switch(action.type){
        case 'GET_CURRENCIES_SUCCESS':
            state.currencies = Object.assign([], action.payload);
            return {...state};
        case 'SET_FIAT_CURRENCY':
            state.fiatCurrency = action.payload;
            return {...state};
        case 'SHOW_CURRENCY_DETAILS':
            state.selectedCurrency = state.currencies.find(currency => (currency.id === action.payload));
            return {...state};
        default:
            return state;
    }
};