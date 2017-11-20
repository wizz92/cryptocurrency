import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Scene,Router} from 'react-native-router-flux';

import reducers from './src/reducers'
import CurrencyList from './src/components/CurrencyList';
import CurrencyDetails from './src/components/CurrencyDetails/';
import Preferences from './src/components/Preferences/';

export default () => (
    <Provider store={createStore(reducers, {}, applyMiddleware(thunk))}>
        <Router navigationBarStyle={{top: 40}}>
            <Scene key='generalList' component={CurrencyList} title='List of Currencies' initial/>
            <Scene key='currencyDetails' component={CurrencyDetails} title='Currency Details' />
        </Router>
    </Provider>
)