import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function ShareButton({url}) {
  function onPressButton() {
    Linking.openURL(url);
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onPressButton()}>
      <Icon name="external-link" color={'#FFF'} size={20} />
    </TouchableOpacity>
  );
}

export default ShareButton;
