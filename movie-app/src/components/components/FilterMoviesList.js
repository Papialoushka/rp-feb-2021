import { filterCriteria } from '../data';
import FilterMoviesLink from './FilterMoviesLink';

const FilterMoviesList = () => {
  return (
    <ul>
      {filterCriteria.map((genre, index) => (
        <li>
          <FilterMoviesLink genre={genre} key={index}/>
        </li>
      ))}
    </ul>
  )
}

export default FilterMoviesList;
