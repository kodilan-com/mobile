import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import SearchTag from './SearchTag';

function SearchSuggestions() {
  return (
    <View style={styles.tags}>
      <SearchTag name="Frontend" type="tag" />
      <SearchTag name="Backend" type="tag" />
      <SearchTag name="Mobile" type="tag" />
      <SearchTag name="DevOps" type="tag" />
      <SearchTag name="İstanbul" type="location" />
      <SearchTag name="İzmir" type="location" />
      <SearchTag name="Ankara" type="location" />
      <SearchTag name="Remote" type="location" />
    </View>
  );
}

const styles = StyleSheet.create({
  tags: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: '5%',
  },
});

export default SearchSuggestions;
