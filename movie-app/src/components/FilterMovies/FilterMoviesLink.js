const FilterMoviesLink = (props) => <a onClick={props.onGenresClick}>{props.genre}</a>;

export default FilterMoviesLink;

FilterMoviesLink.propTypes = {
  genre: PropTypes.string,
}
