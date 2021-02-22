import React from 'react';
const filterCriteria = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
const sortCriteria = ['Release Date', 'Rating'];

function SortItems(props) {
  const sortCriteria = props.sortCriteria;

  // TODO: use item.id as key.
  const sortItems = (
    <ul className='sort-filter' role='listbox'>{sortCriteria.map((item, index) => <li key={index}
                                                                                      role='option'>{item}</li>)}</ul>
  )

  return (
    <div className='sort-filter-wrapper'>
      {sortItems}
    </div>
  );
}

function FilterItems(props) {
  const filterCriteria = props.filterCriteria;

  // TODO: use item.id as key.
  const filterItems = (
    <ul className='results-filter' role='list'>{filterCriteria.map((item, index) => <li key={index}
                                                                                        role='listitem'>{item}</li>)}</ul>
  );

  return (
    <div className='sort-filter-wrapper'>
      {filterItems}
    </div>
  );
}

function ResultsFilter () {
  return (
    <nav className='results-filter-wrapper'>
      <FilterItems filterCriteria={filterCriteria}/>
      <SortItems sortCriteria={sortCriteria} />
    </nav>
  )
}

export default ResultsFilter;
