import { client, checkError } from './client';

export function getUser() {
  return client.auth.session() && client.auth.session().user;
}

export async function signUpUser(email, password) {
  const response = await client.auth.signUp({ email, password });

  return response.user;
}

export async function signInUser(email, password) {
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

export async function logout() {
  await client.auth.signOut();

  return (window.location.href = '../');
}

export async function getWatchList() {
  const { data } = await client.from('movies').select('*');

  return data;
}

export async function addToWatchList(movie) {
  const response = await client.from('movies').insert(movie);

  return checkError(response);
}

export async function removeFromWatchList(id) {
  const response = await client.from('movies').delete().match({ api_id: id });
  return checkError(response);
}
