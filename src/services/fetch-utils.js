export async function searchMovies(someString) {
  const response = await fetch(`/.netlify/functions/movies-endpoint?query=${someString}`);

  const data = await response.json();

  return data.results;
}
