/* eslint-disable react-hooks/exhaustive-deps */
// TODO : Fix Exhaustive Deps
import React, {useEffect, useState} from 'react';
import {FlatList, Alert, ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';
import PostsLoading from '../components/PostsLoading';
import getPosts from '../requests/getPosts';

function Recently() {
  const [recentlyPosts, setRecentlyPosts] = useState([]);
  const [refreshStatus, setRefreshStatus] = useState(false);
  const [page, setPage] = useState(1);
  function loadPosts() {
    getPosts().then(res => {
      setRecentlyPosts(res.data.data);
      setRefreshStatus(false);
    });
  }
  function loadMore() {
    const newPage = page + 1;
    getPosts(newPage).then(res => {
      setRecentlyPosts(recentlyPosts.concat(res.data.data));
      setPage(newPage);
    });
  }
  function refresh() {
    if (!refreshStatus) {
      setRefreshStatus(true);
      setPage(1);
      loadPosts();
    }
  }
  function checkConnection() {
    NetInfo.fetch().then(status => {
      if (status.isConnected) {
        loadPosts();
      } else {
        Alert.alert(
          'Uyarı',
          'Uygulama verilerine erişebilmek için internet bağlantısı gereklidir!',
          [
            {
              text: 'Tekrar Dene',
              onPress: () => checkConnection(),
            },
          ],
          {
            cancelable: false,
          },
        );
      }
    });
  }
  useEffect(() => {
    checkConnection();
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
          onEndReachedThreshold={2}
          onEndReached={() => loadMore()}
          ListFooterComponent={<ActivityIndicator color="#1d9b54" />}
        />
      ) : (
        <PostsLoading />
      )}
    </React.Fragment>
  );
}

export default Recently;
