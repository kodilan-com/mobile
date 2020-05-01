import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-community/picker';
import Header from '../components/Header';
import SearchSuggestions from '../components/SearchSuggestions';
import locations from '../helpers/locations';

function Search({navigation}) {
  const [searchText, setSearchText] = useState();
  const [searchLocation, setSearchLocation] = useState();
  function onPressSearch() {
    navigation.navigate('SearchResults', {
      params: {query: searchText, location: searchLocation},
    });
  }
  return (
    <View style={styles.container}>
      <Header title="İlan Arama" />
      <View style={[styles.container, styles.box]}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'#666'}
          placeholder="Pozisyon adı, teknoloji adı"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <View style={styles.pickerBox}>
          <Picker
            mode="dialog"
            style={styles.picker}
            selectedValue={searchLocation}
            onValueChange={value => setSearchLocation(value)}>
            <Picker.Item label="Şehir Seçiniz" value="" />
            {locations.map(item => (
              <Picker.Item
                key={'location' + item.location}
                label={item.location}
                value={item.location}
              />
            ))}
          </Picker>
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={() => onPressSearch()}>
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
  box: {
    paddingTop: 25,
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
  },
  pickerBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 12,
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
});

export default Search;
