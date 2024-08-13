import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpCircle, ExternalLink, MessageSquare } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">{story.title}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <ArrowUpCircle className="w-5 h-5 mr-1 text-orange-500" />
          <span>{story.points} points</span>
          <MessageSquare className="w-5 h-5 ml-4 mr-1 text-blue-500" />
          <span>{story.num_comments} comments</span>
        </div>
        <div className="flex space-x-4">
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
          >
            Read More
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <Link
            to={`/comments/${story.objectID}`}
            className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            View Comments
            <MessageSquare className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;