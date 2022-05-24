import React from 'react';
import { addToWatchList } from './services/supabase-utils';

export default function MovieItem({ isOnWatchList, movie, refreshWatchList }) {
  const watched = isOnWatchList(movie.id);

  async function handleClick() {
    await addToWatchList({
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
      api_id: movie.id,
    });
    await refreshWatchList();
  }

  return (
    <div onClick={handleClick} style={{ backgroundColor: watched ? 'gold' : 'grey' }}>
      <h3>{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
      <p>{movie.overview}</p>
    </div>
  );
}
