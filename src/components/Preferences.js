import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Button from './common/Button';

const Preferences = props => (
    <View style={styles.wrapper}>
        <Button text='Refresh' fiatCurrency={props.fiatCurrency}/>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
            <Button text='In Usd' fiatCurrency='USD' />
            <Button text='In Euro' fiatCurrency='EUR' />
            <Button text='In Yuan' fiatCurrency='CNY' />
        </View>
    </View>
);

const mapStateToProps = state => ({
    fiatCurrency: state.fiatCurrency
});

const styles = {
    wrapper: {
        marginTop: 100,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
}

export default connect(mapStateToProps)(Preferences);