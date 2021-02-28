const FilterMoviesLink = (props) => <a>{props.genre}</a>;

export default FilterMoviesLink;

FilterMoviesLink.propTypes = {
  genre: PropTypes.string,
}
