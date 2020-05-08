import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import types from '../helpers/types';

function PostType({type, style}) {
  const navigation = useNavigation();
  function onPressPostType() {
    navigation.push('SearchResults', {params: {type: type}});
  }
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={() => onPressPostType()}>
      <Text style={[styles.type, types[type].style, style]}>
        {types[type].text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
  },
  type: {
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
});

export default PostType;
