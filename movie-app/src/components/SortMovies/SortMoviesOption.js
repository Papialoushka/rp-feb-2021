const SortMoviesOption = (props) => <li role='option' onClick={props.onSortMovies}>{props.name}</li>;

export default SortMoviesOption;

SortMoviesOption.propTypes = {
  name: PropTypes.oneOf(['release date', 'rating']),
}

SortMoviesOption.defaultProps = {
  criterium: 'Release Date',
}
