import React from 'react';
import { useState, useEffect } from 'react';
import { getWatchList, logout } from './services/supabase-utils';
import MovieItem from './MovieItem';

export default function WatchListPage() {
  const [watchList, setWatchList] = useState([]);

  async function refreshWatchList() {
    const myWatchList = await getWatchList();

    setWatchList(myWatchList);
  }

  useEffect(() => {
    async function load() {
      refreshWatchList();
    }
    load();
  }, []);

  function isOnWatchList() {
    return true;
  }

  return (
    <div>
      <header>
        <a href="/search">Search</a>
        <a href="/watch-list">Watch List</a>
        <a href="/" onClick={logout}>
          Logout
        </a>
      </header>
      <div>
        {watchList.map((movie, i) => (
          <MovieItem
            key={movie + i}
            refreshWatchList={refreshWatchList}
            isOnWatchList={isOnWatchList}
            movie={movie}
            page={'watch-list'}
          />
        ))}
      </div>
    </div>
  );
}
