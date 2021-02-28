const Footer = (props) => {
  return (
    <footer className={props.className}>{props.children}</footer>
  )
}

export default Footer;

Footer.propTypes = {
  children: PropTypes.element.isRequired
};
