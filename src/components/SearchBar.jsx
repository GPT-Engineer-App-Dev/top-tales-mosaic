import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search stories..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 pl-10 rounded-full bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full hover:bg-orange-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;