import React from 'react';
import {View, Text} from 'react-native';
import PostPreview from '../components/PostPreview'

function Recently() {
  return (
    <View>
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </View>
  );
}

export default Recently;
