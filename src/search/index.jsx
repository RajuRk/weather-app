import { useState } from 'react';

export default function index({ search, setSearch, handleSearch }) {
  return (
    <div className='search-engine'>
      <input
        type='text'
        className='city-search'
        placeholder='Enter city name'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='search-btn' onClick={handleSearch}>
        Search Weather
      </button>
    </div>
  );
}
