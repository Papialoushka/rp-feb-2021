import React from 'react';
import Button from './button';

function SearchInput() {
  return <input placeholder='What do you want to watch?' aria-label='Type movie name to search' type='search'/>
}

class SearchForm extends React.Component {
  render() {
    return (
      <form className='search-form' action='GET'>
        <SearchInput/>
        <Button name='Search' className='search-button' />
      </form>
    )
  }
}

export default SearchForm;
