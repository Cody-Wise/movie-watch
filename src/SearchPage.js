import React, { useState, useEffect } from 'react';
import MovieItem from './MovieItem';
import { searchMovies } from './services/fetch-utils';
import { getWatchList } from './services/supabase-utils';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);


  async function handleSearch(e) {
    e.preventDefault();

    const movies = await searchMovies(query);

    setMovies(movies);
  }

  async function refreshWatchList() {
    const myWatchList = await getWatchList();

    setWatchList(myWatchList);
  }

  useEffect(() => {
    refreshWatchList();
  }, []);

  return (
  <div>
    <form onSubmit={handleSearch}>
      <input onChange={e => setQuery(e.target.value)} className="input" value={query} />
      <button>Search</button>
    </form>
    {movies.map((movie, i) => <MovieItem
    key={movie + i} watchList={watchList} />)}

  </div>
  );
}
