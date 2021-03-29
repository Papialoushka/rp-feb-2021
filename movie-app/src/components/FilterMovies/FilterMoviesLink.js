const FilterMoviesLink = (props) => <a onClick={props.onGenresClick}>{props.genre}</a>;

FilterMoviesLink.propTypes = {
  genre: PropTypes.string,
}

export default FilterMoviesLink;
