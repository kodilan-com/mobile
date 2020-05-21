import instance from './instance';

const getTagPosts = tag => {
  return instance.get(`tags/${tag}/posts`);
};

export default getTagPosts;
