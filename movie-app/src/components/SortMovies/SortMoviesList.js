import SortMoviesOption from './SortMoviesOption';
import Button from '../Button/Button';

const sortCriteria = ['Release Date', 'Rating'];

const SortMoviesList = () => {
  return (
    <div className='sort-wrapper'>
      <p>Sort by</p>
      <Button className='show-list-button' name={sortCriteria[0]}/>
      <ul role='listbox' className='sort-results'>
        {sortCriteria.map((criterium, index) => (
          <SortMoviesOption criterium={criterium} key={index}/>
        ))}
      </ul>
    </div>
  )
}

export default SortMoviesList;
