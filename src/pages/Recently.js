import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';
import PostsLoading from '../components/PostsLoading';
import getRecentlyPosts from '../requests/getRecentlyPosts';

function Recently() {
  const [recentlyPosts, setRecentlyPosts] = useState([]);
  const [refreshStatus, setRefreshStatus] = useState(false);
  function loadPosts() {
    getRecentlyPosts().then(res => {
      setRecentlyPosts(res.data.data);
      setRefreshStatus(false);
    });
  }
  function refresh() {
    if (!refreshStatus) {
      setRefreshStatus(true);
      loadPosts();
    }
  }
  useEffect(() => {
    loadPosts();
  }, []);
  return (
    <React.Fragment>
      <Header title="Son Eklenen İlanlar" />
      {recentlyPosts.length ? (
        <FlatList
          data={recentlyPosts}
          renderItem={item => <PostPreview data={item.item} />}
          keyExtractor={item => item.slug}
          refreshing={refreshStatus}
          onRefresh={() => refresh()}
        />
      ) : (
        <PostsLoading />
      )}
    </React.Fragment>
  );
}

export default Recently;
