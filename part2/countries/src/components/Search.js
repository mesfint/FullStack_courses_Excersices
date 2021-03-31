import React, { useState } from 'react';

export const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const handleSearch = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
