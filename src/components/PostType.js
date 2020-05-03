import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function PostType({type, style}) {
  const navigation = useNavigation();
  function onPressPostType() {
    navigation.push('SearchResults', {params: {type: type}});
  }

  function renderText() {
    if (type === 1) {
      return <Text style={[styles.type, style]}>Tam Zamanlı</Text>;
    } else if (type === 2) {
      return (
        <Text style={[styles.type, styles.type2, style]}>Yarı Zamanlı</Text>
      );
    } else if (type === 3) {
      return <Text style={[styles.type, styles.type3, style]}>Stajyer</Text>;
    }
  }

  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.6}
      onPress={() => onPressPostType()}>
      {renderText()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
  },
  type: {
    color: '#186fc9',
    borderColor: '#186fc9',
    backgroundColor: '#f1f7fc',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  type2: {
    color: '#f1630d',
    borderColor: '#f1630d',
    backgroundColor: '#fef6f0',
  },
  type3: {
    color: '#dcaa0c',
    borderColor: '#dcaa0c',
    backgroundColor: '#fdfcf2',
  },
});

export default PostType;
