import React from 'react';
import { Input } from 'antd';

export const Search = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <form>
        <Input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for a country"
          style={{ size: 'large' }}
        />
      </form>
    </div>
  );
};
