import client from './httpClient';

const getClientMovies = (params) => client.get('/movies', {params}).then(({data}) => data);

const editClientMovie = (movie) => client.put('/movies', movie).then(({data}));

const addClientMovie = (movie) => client.post('/movies', movie).then(({data}));

const deleteClientMovie = (id) => client.delete('/movies/${id}', movie).then(({data}));

export {
  getClientMovies,
  editClientMovie,
  addClientMovie,
  deleteClientMovie
};
