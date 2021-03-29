import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';

import FilterMoviesLink from './FilterMoviesLink';
import { fetchMoviesByGenres, fetchMovies } from '../../redux/reducers';

const filterCriteria = ['all', 'documentary', 'comedy', 'horror', 'crime'];

const FilterMoviesList = ({ ...props }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {filterCriteria.map((genre) => (
        <li key={uuidv4()}>
          <FilterMoviesLink genre={genre} key={uuidv4()} onGenresClick={() => {
            genre !== 'all' ? dispatch(fetchMoviesByGenres(genre)) : dispatch(fetchMovies);
          }}/>
        </li>
      ))}
    </ul>
  )
}

export default FilterMoviesList;
