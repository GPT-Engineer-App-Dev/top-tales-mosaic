import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommentModal = ({ isOpen, onClose, comments }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Comments</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>
          </div>
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment) => (
                <li key={comment.id} className="border-b border-gray-200 pb-4">
                  <p className="text-sm text-gray-600 mb-1">
                    By {comment.author} | {new Date(comment.created_at).toLocaleString()}
                  </p>
                  <div
                    className="text-gray-800"
                    dangerouslySetInnerHTML={{ __html: comment.text }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No comments available.</p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CommentModal;