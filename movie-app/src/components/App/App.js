import './App.scss';

import React, { useState, useEffect, useCallback } from 'react';
import useToggle from '../../hooks/useToggle';

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

const targetMovie = {
  'title': 'Film 1',
  'id': 'film1',
  'genre': 'documentary',
  'posterPath': '',
  'alt': 'Cool poster',
  'releaseDate': '1992',
  'duration': '220',
  'description': 'Lorem ipsum',
  'rating': '4.3',
}

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isDetailShown, setIsDetailShown] = useToggle();

  useEffect(() => {
    setMoviesList([...data.movies]);
  }, []);

  return (
    <>
      <Header>
        {!isDetailShown ? (
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
              <a className='search-link' href='#' onClick={setIsDetailShown}>Go to Home page</a>
            </div>
            <MovieDetail movie={targetMovie} isDetailShown={isDetailShown}/>
          </>
        )}
      </Header>
      <Main>
        <div className='results-filter-wrapper'>
          <Navigation className='filter-results' ariaLabel='Filter movies criteria'>
            <FilterMoviesList/>
          </Navigation>
          <SortMoviesList/>
        </div>
        <ErrorBoundary>
          <MoviesList moviesList={moviesList}
                      showDetail={setIsDetailShown}/>
        </ErrorBoundary>
      </Main>
      <Footer className='footer'>
        <Logo className='footer-logo' altText='Netflix roulette logo'/>
      </Footer>
    </>
  );
};

export default App;
