import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchStory, fetchComments } from '../services/hackerNewsService';
import { ArrowLeft, MessageSquare, ArrowUpCircle, ExternalLink } from 'lucide-react';

const Comments = () => {
  const { storyId } = useParams();

  const { data: story, isLoading: isStoryLoading } = useQuery({
    queryKey: ['story', storyId],
    queryFn: () => fetchStory(storyId),
  });

  const { data: comments, isLoading: areCommentsLoading } = useQuery({
    queryKey: ['comments', storyId],
    queryFn: () => fetchComments(storyId),
  });

  if (isStoryLoading || areCommentsLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Stories
      </Link>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-800">{story.title}</h1>
        <div className="flex items-center text-gray-600 mb-4">
          <ArrowUpCircle className="w-5 h-5 mr-1 text-orange-500" />
          <span className="mr-4">{story.points} points</span>
          <MessageSquare className="w-5 h-5 mr-1 text-blue-500" />
          <span>{story.num_comments} comments</span>
        </div>
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
        >
          Read Full Article
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white rounded-lg shadow-md p-6">
            <p className="text-sm text-gray-600 mb-2">
              By {comment.author} | {new Date(comment.created_at).toLocaleString()}
            </p>
            <div
              className="text-gray-800 prose"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;