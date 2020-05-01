import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';
import getRecentlyPosts from '../requests/getRecentlyPosts';

function Recently() {
  const [recentlyPosts, setRecentlyPosts] = useState([]);
  useEffect(() => {
    getRecentlyPosts().then(res => {
      console.log(res.data.data)
      setRecentlyPosts(res.data.data);
    });
  }, []);
  return (
    <React.Fragment>
      <Header title="Son Eklenen İlanlar" />
      <FlatList
        data={recentlyPosts}
        renderItem={item => <PostPreview data={item.item} />}
        keyExtractor={item => item.slug}
      />
    </React.Fragment>
  );
}

export default Recently;
