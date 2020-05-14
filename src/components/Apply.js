import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  ToastAndroid,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import Icon from 'react-native-vector-icons/Feather';

function Apply({email, url, position}) {
  function emailNotSupported() {
    Alert.alert(
      'E-posta uygulaması bulunamadı!',
      `${email} adresine "${position} Başvurusu" başlığı ile e-posta gönderebilirsiniz. E-posta adresini kopyalamak için başvuru düğmesine basılı tutabilirsiniz.`,
    );
  }
  function onPressEmail() {
    const email_url = `mailto:${email}?subject=${position} Başvurusu&body=%0A%0A%0A%0A-%0Akodilan.com aracılığıyla gönderilmiştir`;
    Linking.canOpenURL(email_url)
      .then(supported => {
        if (supported) {
          Linking.openURL(email_url);
        } else {
          emailNotSupported();
        }
      })
      .catch(err => {
        emailNotSupported();
      });
  }
  function onPressUrl() {
    Linking.openURL(url);
  }
  function onLongPressButton(text) {
    Clipboard.setString(text);
    if (Platform.OS === 'android') {
      ToastAndroid.show('Bağlantı panoya kopyalandı.', ToastAndroid.SHORT);
    } else {
      Alert.alert('Bilgi', 'Bağlantı panoya kopyalandı.');
    }
  }
  return (
    <View style={styles.applyButtons}>
      {email ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.applyButton}
          onPress={() => onPressEmail()}
          onLongPress={() => onLongPressButton(email)}>
          <Icon name="mail" color="#FFF" size={20} />
          <Text style={styles.applyButtonText}>E-Posta ile Başvur</Text>
        </TouchableOpacity>
      ) : null}
      {url ? (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.applyButton, {marginTop: 10}]}
          onPress={() => onPressUrl()}
          onLongPress={() => onLongPressButton(url)}>
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
