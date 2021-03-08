import './../styles/Button.scss';

const Button = (props) => (<button {...props} onClick={props.onClick ? props.onClick : null}
                                   className={`button ${props.className}`}>{props.name}</button>);

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  name: 'Button',
}
