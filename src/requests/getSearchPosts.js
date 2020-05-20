import instance from './instance';

const getSearchPosts = params => {
  return instance.get('search', {
    params,
  });
};

export default getSearchPosts;
