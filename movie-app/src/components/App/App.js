import './App.scss';

import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch, useSelector, shallowEqual } from 'react-redux';

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

import { getMovies, getGenres } from '../../redux/actions';
import { ModalWindow } from '../ModalWindow';
import MovieForm from '../Form/Form';
import useToggle from '../../hooks/useToggle';

const App = ({ ...props }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [movieDetailActive, setMovieDetailActive] = useState(null);
  const [isShownModal, setIsShownModal] = useToggle();
  const [modalTitle, setModalTitle] = useState('none');

  useEffect(() => {
    setMoviesList([...props.movies]);
  }, [...props.movies]);

  const onActivateMovie = useCallback((movie) => {
    setMovieDetailActive(movie);
    document.documentElement.scrollTop = 0;
  });

  const deactivateMovie = useCallback(() => {
    setMovieDetailActive(null);
  }, []);

  return (
    <>
      <Header>
        {!movieDetailActive ? (
          <>
            <Logo className='header-logo' altText='Netflix movies logo'/>
            <Button className='add-button' name='Add movie' onClick={() => {
              setIsShownModal();
              setModalTitle('add');
            }}/>
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
          <SortMoviesList/>
        </div>
        <ErrorBoundary>
          <MoviesList moviesList={moviesList}
                      onActivateMovie={onActivateMovie}/>
        </ErrorBoundary>
      </Main>
      <Footer className='footer'>
        <Logo className='footer-logo' altText='Netflix roulette logo'/>
      </Footer>
      <>
        {
          (isShownModal) && <ModalWindow onShow={() => {
            setIsShownModal();
            setMoviesList([...props.movies]);
          }}>
            <h2>
              {modalTitle} movie
            </h2>
            <MovieForm/>
          </ModalWindow>
        }
      </>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: () => dispatch(getMovies()),
    getGenres: () => dispatch(getGenres()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
