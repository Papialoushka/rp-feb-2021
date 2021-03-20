import SortMoviesOption from './SortMoviesOption';
import Button from '../Button/Button';

const sortCriteria = ['Release Date', 'Rating'];

const SortMoviesList = ({sortCriterion, onSortMovies}) => {
  return (
    <div className='sort-wrapper'>
      <p>Sort by</p>
      <Button className='show-list-button' name={sortCriterion}/>
      <ul role='listbox' className='sort-results'>
        {sortCriteria.map((criterion, index) => (
          <SortMoviesOption criterium={criterion} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export default SortMoviesList;
