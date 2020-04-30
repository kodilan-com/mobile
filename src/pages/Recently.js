import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';

function Recently() {
  return (
    <React.Fragment>
      <Header title="Son Eklenen İlanlar" />
      <ScrollView>
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
        <PostPreview />
      </ScrollView>
    </React.Fragment>
  );
}

export default Recently;
