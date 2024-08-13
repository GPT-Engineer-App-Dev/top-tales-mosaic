import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTopStories, fetchComments } from '../services/hackerNewsService';
import StoryList from './StoryList';
import SearchBar from './SearchBar';
import Header from './Header';

const HackerNewsApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: stories, isLoading, error } = useQuery({
    queryKey: ['topStories', searchTerm],
    queryFn: () => fetchTopStories(searchTerm),
  });

  const handleFetchComments = async (storyId) => {
    return await fetchComments(storyId);
  };

  if (error) return <div className="text-red-500 text-center mt-10">Error fetching stories</div>;

  return (
    <div className="bg-gradient-to-br from-orange-100 to-yellow-200 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar onSearch={setSearchTerm} />
        <StoryList stories={stories} isLoading={isLoading} fetchComments={handleFetchComments} />
      </main>
    </div>
  );
};

export default HackerNewsApp;