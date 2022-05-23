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

  function isOnWatchList(api_id) {
    const movieMatch = watchList.find(
      (watchListItem) => Number(watchListItem.api_id) === Number(api_id)
    );

    return Boolean(movieMatch);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input onChange={(e) => setQuery(e.target.value)} className="input" value={query} />
        <button>Search</button>
      </form>
      <div>
        {movies.map((movie, i) => (
          <MovieItem
            key={movie + i}
            refreshWatchList={refreshWatchList}
            isOnWatchList={isOnWatchList}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}
