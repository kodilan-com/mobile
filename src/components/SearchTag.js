import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function SearchTag({name, type}) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.tag}>
      <Text style={styles.tagText}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#FFF',
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 12,
  },
  tagText: {
    color: '#666',
    fontSize: 15,
  },
});

export default SearchTag;
