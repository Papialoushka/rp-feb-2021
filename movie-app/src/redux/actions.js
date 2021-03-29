export const getMovies = () => {
  return {
    type: 'GET_MOVIES',
  }
}

export const editMovie = (values) => {
  return {
    type: 'EDIT_MOVIE',
    payload: values,
  }
}

export const deleteMovie = (movie) => {
  return {
    type: 'DELETE_MOVIE',
    payload: movie,
  }
}

export const filterMovies = (genre) => {
  return {
    type: 'FILTER_MOVIES',
    payload: genre,
  }
}

export const getGenres = () => {
  return {
    type: 'GET_GENRES',
  }
}

export const ADD_MOVIE = 'ADD_MOVIE';
