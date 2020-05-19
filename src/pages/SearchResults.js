import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';
import PostsLoading from '../components/PostsLoading';
import getSearchPosts from '../requests/getSearchPosts';
import getTagPosts from '../requests/getTagPosts';
import getCompanyPosts from '../requests/getCompanyPosts';

function SearchResults({route}) {
  const [searchPosts, setSearchPosts] = useState([]);
  useEffect(() => {
    if (route.params.params.tag) {
      getTagPosts(route.params.params.tag).then(res => {
        setSearchPosts(res.data.data);
      });
    } else if (route.params.params.company) {
      getCompanyPosts(route.params.params.company).then(res => {
        setSearchPosts(res.data.data);
      });
    } else {
      getSearchPosts(route.params.params).then(res => {
        setSearchPosts(res.data.data);
      });
    }
  }, [route.params.params]);
  return (
    <React.Fragment>
      <Header title="Arama Sonuçları" />
      {searchPosts.length ? (
        <FlatList
          data={searchPosts}
          renderItem={item => <PostPreview data={item.item} />}
          keyExtractor={item => item.slug}
        />
      ) : (
        <PostsLoading />
      )}
    </React.Fragment>
  );
}

export default SearchResults;
