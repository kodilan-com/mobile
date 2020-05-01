import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import PostPreview from '../components/PostPreview';
import Header from '../components/Header';
import getSearchPosts from '../requests/getSearchPosts';
import getTagPosts from '../requests/getTagPosts';

function SearchResults({route}) {
  const [searchPosts, setSearchPosts] = useState([]);
  useEffect(() => {
    if (route.params.params.tag) {
      getTagPosts(route.params.params.tag).then(res => {
        setSearchPosts(res.data.data);
      });
    } else {
      getSearchPosts(route.params.params).then(res => {
        setSearchPosts(res.data.data);
      });
    }
  }, []);
  return (
    <React.Fragment>
      <Header title="Arama Sonuçları" />
      <FlatList
        data={searchPosts}
        renderItem={item => <PostPreview data={item.item} />}
        keyExtractor={item => item.slug}
      />
    </React.Fragment>
  );
}

export default SearchResults;
