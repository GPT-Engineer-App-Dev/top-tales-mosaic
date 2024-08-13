import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1';

export const fetchTopStories = async (query = '') => {
  const response = await axios.get(`${BASE_URL}/search?tags=front_page&hitsPerPage=100&query=${query}`);
  return response.data.hits;
};

export const fetchStory = async (storyId) => {
  const response = await axios.get(`${BASE_URL}/items/${storyId}`);
  return response.data;
};

export const fetchComments = async (storyId) => {
  const response = await axios.get(`${BASE_URL}/items/${storyId}`);
  return response.data.children;
};