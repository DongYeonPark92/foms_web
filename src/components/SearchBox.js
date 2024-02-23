import React, { useState } from 'react';
//import './SearchBox.css';

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // 검색어가 변경될 때 부모 컴포넌트로 전달
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="검색..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBox;
