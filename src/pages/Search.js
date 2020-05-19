import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ModalSelector from 'react-native-modal-selector';
import Header from '../components/Header';
import SearchSuggestions from '../components/SearchSuggestions';
import locations from '../helpers/locations';

function Search({navigation}) {
  const [searchText, setSearchText] = useState();
  const [searchLocation, setSearchLocation] = useState();
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    setEditable(true);
  }, []);
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
          editable={editable}
          style={styles.input}
          placeholderTextColor={'#666'}
          placeholder="Pozisyon adı, teknoloji adı"
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <View style={styles.pickerBox}>
          <ModalSelector
            data={locations}
            animationType={'slide'}
            selectStyle={styles.picker}
            selectTextStyle={styles.pickerText}
            initValueTextStyle={styles.modalInitTextStyle}
            cancelStyle={styles.modalCancelStyle}
            cancelText={'Seçim Aracını Kapat'}
            initValue="Şehir Seçin"
            onChange={option => setSearchLocation(option.key)}
          />
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
    width: '90%',
    marginTop: 12,
    position: 'relative',
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 12,
  },
  pickerText: {
    color: '#333',
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
  modalCancelStyle: {
    paddingVertical: 12,
  },
  modalInitTextStyle: {
    color: '#666',
  },
});

export default Search;
