import './../styles/SearchInput.scss';

const SearchInput = (props) => <input placeholder={props.placeholder} aria-label={props.ariaLabel} type='search'/>;

export default SearchInput;

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
}
