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

const App = () => {
  return (
    <>
      <Header>
        <Logo className='header-logo' altText='Netflix movies logo'/>
        <Button className='add-button' name='Add movie'/>
        <h1>Find your movie</h1>
        <SearchForm/>
      </Header>
      <Main>
        <div className='results-filter-wrapper'>
          <Navigation className='filter-results' ariaLabel='Filter movies criteria'>
            <FilterMoviesList/>
          </Navigation>
          <SortMoviesList/>
        </div>
        <ErrorBoundary>
          <MoviesList />
        </ErrorBoundary>
      </Main>
      <Footer className='footer'>
        <Logo className='footer-logo' altText='Netflix roulette logo'/>
      </Footer>
    </>
  );
};

export default App;
