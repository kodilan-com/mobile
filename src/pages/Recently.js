import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';
import PostsLoading from '../components/PostsLoading';
import getRecentlyPosts from '../requests/getRecentlyPosts';

function Recently() {
  const [recentlyPosts, setRecentlyPosts] = useState([]);
  useEffect(() => {
    getRecentlyPosts().then(res => {
      setRecentlyPosts(res.data.data);
    });
  }, []);
  return (
    <React.Fragment>
      <Header title="Son Eklenen İlanlar" />
      {recentlyPosts.length ? (
        <FlatList
          data={recentlyPosts}
          renderItem={item => <PostPreview data={item.item} />}
          keyExtractor={item => item.slug}
        />
      ) : (
        <PostsLoading />
      )}
    </React.Fragment>
  );
}

export default Recently;
