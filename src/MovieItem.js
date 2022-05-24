import React from 'react';
import { addToWatchList, removeFromWatchList } from './services/supabase-utils';

export default function MovieItem({ isOnWatchList, movie, refreshWatchList, page }) {
  const watched = isOnWatchList(movie.id);

  async function handleClick() {
    if (!watched) {
      await addToWatchList({
        title: movie.title,
        poster_path: movie.poster_path,
        overview: movie.overview,
        api_id: movie.id,
      });
    } else {
      if (page === 'search') {
        await removeFromWatchList(movie.id);
      }
      if (page === 'watch-list') {
        await removeFromWatchList(movie.api_id);
      }
    }
    await refreshWatchList();
  }

  return (
    <div
      className="movie-item"
      onClick={handleClick}
      style={{ backgroundColor: watched ? 'gold' : 'grey' }}
    >
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <p>{movie.overview}</p>
    </div>
  );
}
