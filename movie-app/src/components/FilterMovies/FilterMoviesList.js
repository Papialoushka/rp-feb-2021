import FilterMoviesLink from './FilterMoviesLink';

const filterCriteria = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

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
