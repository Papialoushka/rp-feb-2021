export const getMovies = () => {
  return {
    type: 'GET_MOVIES',
  }
}

export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    payload: {
      'title': movie.title,
      'id': movie.id,
      'genre': movie.genre,
      'url': movie.url,
      'release_date': movie.releaseDate,
      'runtime': movie.runtime,
      'overview': movie.overview,
      'vote_average': movie.vote_average,
    }
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
