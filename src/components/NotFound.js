import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


function Notfound(){
    return (
        <View style={style.container}>
            <Text>Üzgünüz, eşleşen herhangi bir ilan bulamadık.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#26ae61',
        paddingVertical: 15,
        width: '50%',
    }
})

export default Notfound;