import React from 'react';
import ResultsFilter from './results-filter';
import Greeting from './greeting';

const Main = () => {
  return (
    <main className='main-content'>
      <div className='inner-wrapper'>
        <ResultsFilter />
        <Greeting />
      </div>
    </main>
  )
}

export default Main;
