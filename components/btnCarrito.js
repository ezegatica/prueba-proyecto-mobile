import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import Icarrito from '../assets/carrito.png'
export default class BtnCarrito extends Component {
    log = () => {
        console.log(this.props);
    }
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.cont} onPress={() => {
                    this.props.navigation.navigate('Carrito')
                }}>
                    <Image source={Icarrito} style={styles.foto} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    foto: {
        height: 30,
        width: 30,
    },
    cont: {
        marginRight: 10,
        padding: 6,
    }
})