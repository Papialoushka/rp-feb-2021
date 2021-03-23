import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import React, { useState, useCallback, useEffect } from 'react';

import SortMoviesOption from './SortMoviesOption';
import Button from '../Button/Button';
import useToggle from '../../hooks/useToggle';
import { fetchMovies } from '../../redux/reducers';

const sortCriteria = ['release_date', 'vote_average'];

const SortMoviesList = () => {
  const [isShownSortList, setIsShownSortList] = useToggle();
  const [sortCriterion, setsortCriterion] = useState('release_date');
  const [sortCriterionTrimmed, setSortCriterionTrimmed] = useState([]);

  useEffect(() => {
    const trim = sortCriteria.map((trimTarget) => trimTarget.replace(/[_-]+/g, ' '));
    setSortCriterionTrimmed(trim);
  }, []);

  const handleSortButtonClick = useCallback(() => {
    setIsShownSortList();
  });

  const dispatch = useDispatch();

  if (!isShownSortList) {
    return (
      <div className='sort-wrapper'>
        <p>Sort by</p>
        <Button className='show-list-button' name={sortCriterion} onClick={handleSortButtonClick}/>
      </div>
    )
  }
  else {
    return (
      <div className='sort-wrapper'>
        <p>Sort by</p>
        <Button className='show-list-button' name={sortCriterion}/>
        <ul role='listbox' className='sort-results'>
          {sortCriteria.map((criterion) => (
            <SortMoviesOption name={criterion} criterion={criterion} key={uuidv4()}
                              onSortMovies={() => {
                                dispatch(fetchMovies({ sortBy: criterion, sortOrder: 'desc' }));
                              }}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default SortMoviesList;
