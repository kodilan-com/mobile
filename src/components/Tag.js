import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Tag({name, type, tagStyle, tagTextStyle}) {
  const navigation = useNavigation();
  function onPressTag() {
    if (type === 'tag') {
      navigation.push('SearchResults', {params: {tag: name}});
    } else if (type === 'location') {
      navigation.push('SearchResults', {params: {location: name}});
    }
  }
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.tag, {...tagStyle}]}
      onPress={() => onPressTag()}>
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
