import React from 'react';
import { Newspaper } from 'lucide-react';

const Header = () => (
  <header className="bg-orange-500 text-white p-4 shadow-lg">
    <div className="container mx-auto flex items-center justify-center">
      <Newspaper className="w-8 h-8 mr-2" />
      <h1 className="text-2xl font-bold">Hacker News Top 100</h1>
    </div>
  </header>
);

export default Header;