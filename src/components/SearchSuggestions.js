import React from 'react';
import {View, StyleSheet} from 'react-native';
import Tag from './Tag';

function SearchSuggestions() {
  return (
    <View style={styles.tags}>
      <Tag name="Frontend" type="tag" />
      <Tag name="Backend" type="tag" />
      <Tag name="Mobile" type="tag" />
      <Tag name="DevOps" type="tag" />
      <Tag name="İstanbul" type="location" />
      <Tag name="İzmir" type="location" />
      <Tag name="Ankara" type="location" />
      <Tag name="Remote" type="location" />
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
