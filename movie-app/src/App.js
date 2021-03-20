import './App.scss';
import Logo from './components/Logo';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Button from './components/Button';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import FilterMoviesList from './components/FilterMoviesList';
import SortMoviesList from './components/SortMovies/SortMoviesList';
import ErrorBoundary from './components/ErrorBoundary';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail/MovieDetail';
import useToggle from './components/useToggle';

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
  const [isDetailShown, setIsDetailShown] = useToggle();

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
          <MoviesList showDetail={setIsDetailShown}/>
        </ErrorBoundary>
      </Main>
      <Footer className='footer'>
        <Logo className='footer-logo' altText='Netflix roulette logo'/>
      </Footer>
    </>
  );
};

export default App;
