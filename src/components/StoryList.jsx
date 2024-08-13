import React from 'react';
import StoryCard from './StoryCard';
import SkeletonStoryCard from './SkeletonStoryCard';

const StoryList = ({ stories, isLoading, fetchComments }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <SkeletonStoryCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories?.map((story) => (
        <StoryCard key={story.objectID} story={story} fetchComments={fetchComments} />
      ))}
    </div>
  );
};

export default StoryList;