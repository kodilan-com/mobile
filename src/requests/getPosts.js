import instance from './instance';

const getPosts = (page = 1, count = 25) => {
  return instance.get(`posts?get=${count}&page=${page}`);
};

export default getPosts;
