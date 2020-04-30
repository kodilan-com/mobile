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

function Search() {
  const [searchText, setSearchText] = useState();
  const [searchLocation, setSearchLocation] = useState();
  return (
    <View style={styles.container}>
      <Header title="İlan Arama" />
      <View style={[styles.container, styles.searchBox]}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#666'}
          placeholder="Pozisyon adı, teknoloji adı"
        />
        <View style={styles.pickerBox}>
          <Picker mode="dialog" style={styles.location}>
            <Picker.Item label="Şehir Seçiniz" value="" />
            <Picker.Item label="İstanbul" value="İstanbul" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Icon name="search" color="#fff" size={24} />
          <Text style={styles.buttonText}>İlan Ara</Text>
        </TouchableOpacity>
        <SearchSuggestions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  searchBox: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 55,
    fontSize: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    paddingHorizontal: 12,
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 12,
    position: 'relative',
  },
  location: {
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
});

export default Search;
