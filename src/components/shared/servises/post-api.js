import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts',
  params: { _limit: 4, _page: 2 },
});
export const searchPosts = async (q, _page = 1) => {
  const { data } = await instance.get('/', {
    params: { q, _page },
  });
  return data;
};
