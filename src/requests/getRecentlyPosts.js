import instance from './instance';

const getRecentlyPosts = () => {
  return instance.get('posts?get=25&period=monthly');
};

export default getRecentlyPosts;
