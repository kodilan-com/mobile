import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Apply({email, url, position}) {
  function onPressEmail() {
    Linking.openURL(
      `mailto:${url}?subject=${position} Başvurusu&body=%0A%0A%0A%0A-%0Akodilan.com%20arac%C4%B1l%C4%B1%C4%9F%C4%B1yla%20g%C3%B6nderilmi%C5%9Ftir.`,
    );
  }
  function onPressUrl() {
    Linking.openURL(url);
  }
  return (
    <View style={styles.applyButtons}>
      {email ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.applyButton}
          onPress={() => onPressEmail()}>
          <Icon name="mail" color="#FFF" size={20} />
          <Text style={styles.applyButtonText}>E-Posta ile Başvur</Text>
        </TouchableOpacity>
      ) : null}
      {url ? (
        <TouchableOpacity
          onPress={() => onPressUrl()}
          activeOpacity={0.8}
          style={[styles.applyButton, {marginTop: 10}]}>
          <Icon name="link" color="#FFF" size={20} />
          <Text style={styles.applyButtonText}>Site Üzerinden Başvur</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  applyButtons: {
    paddingVertical: 30,
  },
  applyButton: {
    backgroundColor: '#1d9b54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    marginHorizontal: '5%',
    borderRadius: 3,
  },
  applyButtonText: {
    color: '#FFF',
    marginLeft: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Apply;
