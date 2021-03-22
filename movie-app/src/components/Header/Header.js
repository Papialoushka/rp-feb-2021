const Header = (props) => {
  return (
    <header className='header'>
      <div className='inner-wrapper'>{props.children}</div>
    </header>
  )
}

export default Header;
