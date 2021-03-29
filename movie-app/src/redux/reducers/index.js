import * as moviesAPI from '../../api/moviesAPIService';

export default (state, action) => {
  switch (action.type) {
    case 'GET_MOVIES':
      return {
        movies: [...state.movies],
      }

    case 'EDIT_MOVIE':
      const {
        title,
        genre,
        release_date,
        runtime,
        overview,
        vote_average,
        url,
        id
      } = action.payload;

      const editedMovies = state.movies.map((movie) => {
        if (movie.id === id) {
          return {
            ...movie,
            title: title,
            genre: genre,
            release_date: release_date,
            runtime: runtime,
            overview: overview,
            vote_average: vote_average,
            url: url,
          }
        }
        return ({ ...movie })
      })
      return {
        ...state,
        movies: [...editedMovies],
      }

    case 'DELETE_MOVIE':
      return {
        movies: [...state.movies.filter(movie => movie.id !== action.payload)],
      }

    case 'GET_GENRES':
      return {
        movies: {
          genres: [...state.movies.map(movie => movie.genres)],
        }
      }

    case 'FILTER_MOVIE':
      return {
        // movies: [...state.movies.map(movie => movie.genres.filter(genre => genre === action.payload))],
        movies: [...state.movies],
      }

    case 'LOAD_MOVIES':
      return {
        movies: [...action.payload],
      }

    case 'LOAD_MOVIES_BY_GENRES':
      return {
        movies: [...action.payload],
      }

    default:
      return state;
  }
};

export function fetchMovies(params) {
  return async function fetchMoviesThunk(dispatch, getState) {
    const response = await moviesAPI.getClientMovies(params);

    dispatch({ type: 'LOAD_MOVIES', payload: response.data });
  }
}

export function fetchMoviesByGenres(genre) {
  return async function fetchMoviesByGenresThunk(dispatch, getState) {
    const response = await moviesAPI.getClientMovies({filter: genre});

    dispatch({ type: 'LOAD_MOVIES_BY_GENRES', payload: response.data });
  }
}

export function deleteMovie(id) {
  return async function deleteMovieThunk(dispatch, getState) {
    const response = await moviesAPI.deleteClientMovie({ id: id });

    dispatch({ type: 'DELETE_MOVIE' });
  }
}

export function addMovie(movie) {
  return async function addMovieThunk(dispatch, getState) {
    const request = await moviesAPI.addClientMovie(movie);

    console.log(movie);

    dispatch({ type: 'ADD_MOVIE' });
  }
}
