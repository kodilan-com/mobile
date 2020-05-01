import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function Header({title, button}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {button ? button : null}
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
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 17,
    flex: 1,
  },
});

export default Header;
