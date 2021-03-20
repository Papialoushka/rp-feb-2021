import logo from '../../assets/logo.png';

const Logo = (props) => <img src={logo} alt={props.altText} className={props.className} />;

export default Logo;

Logo.propTypes = {
  className: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};
