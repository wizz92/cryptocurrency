import React, { Component } from 'react'
import { TouchableOpacity, View, Text, FlatList} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';

import {getCurrencies, showCurrencyDetails} from '../actions';
import Preferences from './Preferences';

class Home extends Component {
    componentWillMount(){
        this.props.getCurrencies();
    }
    _renderItem = ({item}) => {
        const fiat = this.props.fiatCurrency ? this.props.fiatCurrency.toLowerCase() : 'usd';
        const price = item['price_' + fiat];
        const listItem = () => (
            <TouchableOpacity onPress={()=>this.props.showCurrencyDetails(item.id)}>
                <View style={{borderBottomWidth: 1, paddingBottom: 5, paddingLeft: 5}}>
                    <Text>Rank: {item.rank}</Text>
                    <Text>Symbol: {item.symbol}</Text>
                    <Text>24h change, %: {item.percent_change_24h}</Text>
                    <Text>Price, {fiat}: {price}</Text>
                </View>
            </TouchableOpacity>
            );
        return <ListItem component={listItem}/>;
    }
        
    render(){
        const {currencies} = this.props;
        const dataToRender = currencies ? currencies : [];
        return (
            <View style={{marginTop:20, marginBottom: 600}}>
                <Preferences  />
                <List style={{}}>
                    <FlatList data={dataToRender}
                    renderItem={this._renderItem}
                    keyExtractor={(currency, index) => index}
                    />
                </List>
            </View>
            )
    }
   
}

const mapStateToProps = state => ({
        currencies: state.currencies,
        fiatCurrency: state.fiatCurrency,
});
        

export default connect(mapStateToProps, {getCurrencies, showCurrencyDetails})(Home);

