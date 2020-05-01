import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SocialButtons() {
  return (
    <View style={styles.social}>
      <TouchableOpacity style={styles.socialButton} activeOpacity={0.7}>
        <Icon name="globe" color="#FFF" size={16} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.socialButton, styles.twitterButton]}
        activeOpacity={0.7}>
        <Icon name="twitter" color="#FFF" size={16} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.socialButton, styles.linkedinButton]}
        activeOpacity={0.7}>
        <Icon name="linkedin" color="#FFF" size={16} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  social: {
    flexDirection: 'row',
  },
  socialButton: {
    backgroundColor: '#666',
    color: '#FFF',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  socialText: {
    color: '#FFF',
    marginLeft: 5,
    fontSize: 13,
  },
  twitterButton: {
    backgroundColor: '#00acee',
  },
  linkedinButton: {
    backgroundColor: '#0e76a8',
  },
});

export default SocialButtons;
