import Button from '../Button/Button';
import SearchInput from './SearchInput';

const SearchForm = () => {
  return (
    <form className='search-form' action='GET'>
      <SearchInput placeholder='What do you want to watch?' ariaLabel='Type movie name to search'/>
      <Button name='Search' className='search-button'/>
    </form>
  )
}

export default SearchForm;
