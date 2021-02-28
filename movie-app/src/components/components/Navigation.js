const Navigation = (props) => (<nav className={props.className} aria-label={props.ariaLabel}>{props.children}</nav>);

export default Navigation;

Navigation.propTypes = {
  children: PropTypes.element.isRequired
};
