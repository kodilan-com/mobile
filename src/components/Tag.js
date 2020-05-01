import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

function Tag({name, type, tagStyle, tagTextStyle}) {
  return (
    <TouchableOpacity activeOpacity={0.6} style={[styles.tag, {...tagStyle}]}>
      <Text style={[styles.tagText, {...tagTextStyle}]}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#FFF',
    borderColor: '#bbb',
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

export default Tag;
