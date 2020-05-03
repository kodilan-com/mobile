import React from 'react';
import {View, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function SocialButtons({web, twitter, linkedin}) {
  function onPressButton(url, platform) {
    platform === 'twitter' ? url = `https://twitter.com/${url}` : null
    Linking.openURL(url);
  }
  return (
    <View style={styles.social}>
      {web ? (
        <TouchableOpacity
          style={styles.socialButton}
          activeOpacity={0.7}
          onPress={() => onPressButton(web, 'web')}>
          <Icon name="globe" color="#FFF" size={16} />
        </TouchableOpacity>
      ) : null}
      {twitter ? (
        <TouchableOpacity
          style={[styles.socialButton, styles.twitterButton]}
          activeOpacity={0.7}
          onPress={() => onPressButton(twitter, 'twitter')}>
          <Icon name="twitter" color="#FFF" size={16} />
        </TouchableOpacity>
      ) : null}
      {linkedin ? (
        <TouchableOpacity
          style={[styles.socialButton, styles.linkedinButton]}
          activeOpacity={0.7}
          onPress={() => onPressButton(linkedin, 'linkedin')}>
          <Icon name="linkedin" color="#FFF" size={16} />
        </TouchableOpacity>
      ) : null}
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
