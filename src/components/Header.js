import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Header({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#26ae61',
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 17
  },
});

export default Header;
