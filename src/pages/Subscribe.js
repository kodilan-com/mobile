import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-community/picker';
import Header from '../components/Header';
import SearchSuggestions from '../components/SearchSuggestions';

function Subscribe() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [time, setTime] = useState();
  return (
    <View style={styles.container}>
      <Header title="Abone Ol" />
      <View style={[styles.container, styles.box]}>
        <Text style={styles.label}>
          Güncel iş ilanlarından haberdar olmak için hemen e-posta listesine
          kayıt olun!
        </Text>
        <View style={styles.pickerBox}>
          <Picker
            mode="dialog"
            style={styles.picker}
            selectedValue={time}
            onValueChange={value => setTime(value)}>
            <Picker.Item label="Haftalık Bildirim" value="Haftalık" />
            <Picker.Item label="Aylık Bildirim" value="Aylık" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#666'}
          placeholder="İsim Soyisim"
          value={name}
          onChangeText={value => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#666'}
          placeholder="E-posta Adresi"
          value={email}
          onChangeText={value => setName(value)}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Icon name="bell" color="#fff" size={24} />
          <Text style={styles.buttonText}>Aboneliği Başlat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  box: {
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 55,
    fontSize: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    marginTop: 12,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    backgroundColor: '#fff',
    position: 'relative',
  },
  picker: {
    height: 50,
    color: '#666',
  },
  button: {
    width: '90%',
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: '#26ae61',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 15,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  label: {
    paddingHorizontal: '5%',
    marginBottom: 20,
    fontSize: 17,
    lineHeight: 24,
    color: '#555',
  },
});

export default Subscribe;
