import MovieCard from './MovieCard';
import {movies} from '../data';
import ResultsCount from './ResultsCount';
import ModalWindow from './ModalWindow/ModalWindow';
import Button from './Button';
import Popup from './Popup/Popup';
import MovieForm from './Form/Form';
import DeleteForm from './Form/DeleteForm';

class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies || [],
      show: false,
      isShownPopup: false,
      isShowPopupButton: false,
      editOptions: ['edit', 'delete'],
      modalTitle: '',
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  showModal(e) {
    this.setState({
      show: !this.state.show,
      modalTitle: e.target.id,
    });
  };

  showPopup(e) {
    this.setState({
      isShownPopup: !this.state.isShownPopup,
    });
  };

  showPopupButton(e) {
    this.setState({
      isShowPopupButton: !this.state.isShowPopupButton,
    });
  };

  deleteMovie(id) {
    this.setState({
      movies: this.state.movies.filter((movie) => movie !== id),
    });
  }

  render() {
    return (
      <>
        <p>It is {this.state.date.toLocaleTimeString()} now</p>
        <h2 className='results-count'>
          {ResultsCount(movies)}
        </h2>
        <ul className='movies-list'>

          {this.state.movies.map((movie) => (
            <li>
              <MovieCard
                movie={movie}
                key={movie.id}
                onPointerOver={(e) => this.showPopupButton(e.target)}
              >
                <Button name='Edit options' className='open-popup'
                        onClick={e => this.showPopup(e)}/>
              </MovieCard>

              <Popup {...this.props} onClick={e => this.showPopup(e)} name='Close edit options'
                     isShownPopup={this.state.isShownPopup}>
                <ul>
                  {this.state.editOptions.map((option) => (
                    <li>
                      <Button name={option} className='open-modal' id={option}
                              onClick={(e) => this.showModal(e)}/>
                    </li>
                  ))}
                </ul>
              </Popup>
            </li>
          ))}
        </ul>
        <ModalWindow onClick={e => this.showModal(e)} show={this.state.show}>
          <h2>
            {this.state.modalTitle} movie
          </h2>
          <MovieForm modalTitle={this.state.modalTitle} />
          <DeleteForm modalTitle={this.state.modalTitle} />
        </ModalWindow>
      </>
    );
  }
}

export default MoviesList;
