const SortMoviesOption = (props) => <li role='option'>{props.criterium}</li>;

export default SortMoviesOption;

SortMoviesOption.propTypes = {
  criterium: PropTypes.oneOf(['Release Date', 'Rating']),
}

SortMoviesOption.defaultProps = {
  criterium: 'Release Date',
}
