import './../styles/Button.scss';

const Button = (props) => (<button className={`button ${props.className}`}>{props.name}</button>);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: 'Button',
}
