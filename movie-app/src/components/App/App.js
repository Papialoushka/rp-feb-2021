import './App.scss';

import React, { useState, useEffect, useCallback } from 'react';

import Logo from '../Logo';
import Button from '../Button';
import Navigation from '../Navigation';

import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import SearchForm from '../SearchForm';

import MovieDetail from '../MovieDetail';
import MoviesList from '../MoviesList';
import FilterMoviesList from '../FilterMovies';
import SortMoviesList from '../SortMovies';

import ErrorBoundary from '../ErrorBoundary';

import data from './data';

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [movieDetailActive, setMovieDetailActive] = useState(null);
  const [sortCriterion, setSortCriterion] = useState('release date');

  useEffect(() => {
    setMoviesList([...data.movies]);
  }, []);

  const onActivateMovie = useCallback((movie) => {
    setMovieDetailActive(movie);
    document.documentElement.scrollTop = 0;
  });

  const deactivateMovie = useCallback(() => {
    setMovieDetailActive(null);
  }, []);

  const onSortMovies = useCallback((sortCriterion) => {
    setSortCriterion(sortCriterion);
  }, []);

  return (
    <>
      <Header>
        {!movieDetailActive ? (
          <>
            <Logo className='header-logo' altText='Netflix movies logo'/>
            <Button className='add-button' name='Add movie'/>
            <h1>Find your movie</h1>
            <SearchForm/>
          </>
        ) : (
          <>
            <div className='header-top-row'>
              <Logo className='header-logo' altText='Netflix movies logo'/>
              <a className='search-link' href='#' onClick={deactivateMovie}>Go to Home page</a>
            </div>
            <MovieDetail movie={movieDetailActive}/>
          </>
        )}
      </Header>
      <Main>
        <div className='results-filter-wrapper'>
          <Navigation className='filter-results' ariaLabel='Filter movies criteria'>
            <FilterMoviesList/>
          </Navigation>
          <SortMoviesList
            sortCriterion={sortCriterion}
            onSortMovies={onSortMovies}/>
        </div>
        <ErrorBoundary>
          <MoviesList moviesList={moviesList}
                      onActivateMovie={onActivateMovie}/>
        </ErrorBoundary>
      </Main>
      <Footer className='footer'>
        <Logo className='footer-logo' altText='Netflix roulette logo'/>
      </Footer>
    </>
  );
};

export default App;
