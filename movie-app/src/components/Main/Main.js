import '../../styles/Main.scss';

const Main = (props) => {
  return (
    <main className='main-content'>
      <div className='inner-wrapper'>
        {props.children}
      </div>
    </main>
  )
}

export default Main;

Main.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
