const ResultsCount = (arr) => {
  return (
    <>
      {!arr.length  ? 'No movies found' :
        arr.length > 1 ? `${arr.length} movies found` : `${arr.length} movie found`
      }
    </>
  )
}

export default ResultsCount;
