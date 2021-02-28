import {sortCriteria} from '../data';
import SortMoviesOption from './SortMoviesOption';
import Button from './Button';

const SortMoviesList = () => {
  return (
    <>
      <p>Sort by</p>
      <Button className='show-list-button' name={sortCriteria[0]}/>
      <ul role='listbox' className='sort-results'>
        {sortCriteria.map((criterium, index) => (
          <SortMoviesOption criterium={criterium} key={index}/>
        ))}
      </ul>
    </>
  )
}

export default SortMoviesList;