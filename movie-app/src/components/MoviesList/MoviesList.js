import MovieCard from '../MovieCard/MovieCard';
import ResultsCount from '../ResultsCount/ResultsCount';
import ModalWindow from '../ModalWindow/ModalWindow';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import MovieForm from '../Form/Form';
import DeleteForm from '../Form/DeleteForm';
import { useState, useEffect, useCallback, useRef } from 'react';
import useToggle from '../../hooks/useToggle';

const movies = [
  {
    'title': 'Film 1',
    'id': 'film1',
    'genre': 'documentary',
    'posterPath': '',
    'alt': 'Cool poster',
    'releaseDate': '1992',
    'duration': '220',
    'description': 'Lorem ipsum',
    'rating': '4.3',
  },
  {
    'title': 'Film 2',
    'id': 'film2',
    'genre': 'horror',
    'posterPath': '',
    'alt': 'Cool poster',
    'releaseDate': '2005',
    'duration': '120',
    'description': 'Lorem ipsum',
    'rating': '4.3',
  },
  {
    'title': 'Film 3',
    'id': 'film3',
    'genre': 'comedy',
    'posterPath': '',
    'alt': 'Cool poster',
    'releaseDate': '2019',
    'duration': '160',
    'description': 'Lorem ipsum',
    'rating': '4.3',
  },
  {
    'title': 'Film 4',
    'id': 'film4',
    'genre': 'crime',
    'posterPath': '',
    'alt': 'Cool poster',
    'releaseDate': '2000',
    'duration': '110',
    'description': 'Lorem ipsum',
    'rating': '4.3',
  },
  {
    'title': 'Film 5',
    'id': 'film5',
    'genre': 'documentary',
    'posterPath': '',
    'alt': 'Cool poster',
    'releaseDate': '1980',
    'duration': '130',
    'description': 'Lorem ipsum',
    'rating': '4.3',
  },
  {
    'title': 'Film 6',
    'id': 'film6',
    'genre': 'crime',
    'posterPath': '',
    'alt': 'Cool poster',
    'releaseDate': '1936',
    'duration': '140',
    'description': 'Lorem ipsum',
    'rating': '4.3',
  }
];

const MoviesList = ({ moviesList = [], showDetail }) => {
  const editOptions = ['edit', 'delete'];
  const [isShownPopup, setIsShownPopup] = useToggle();
  const [isShownModal, setIsShownModal] = useToggle();
  const [modalTitle, setModalTitle] = useState('none');

  const itemRef = useRef(null);

  const moveFocusToPopup = () => {
    itemRef.current.focus();
  }

  const deleteMovie = (id) => {
    setMovies(moviesList.filter((movie) => movie !== id));
  }

  return (
    <>
      <h2 className='results-count'>
        {ResultsCount(moviesList)}
      </h2>
      <ul className='movies-list'>
        {moviesList.map((movie) => (
          <li>
            <MovieCard
              movie={movie}
              key={movie.id}
              onClick={showDetail}
            >
              <Button name='Edit or delete the movie' className='open-popup'
                      onClick={() => {
                        setIsShownPopup();
                        moveFocusToPopup();
                      }}/>
            </MovieCard>

            <Popup onClick={setIsShownPopup} name='Close edit options'
                   isShownPopup={isShownPopup}>
              <ul>
                {editOptions.map((option) => (
                  <li ref={itemRef}>
                    <Button name={option} className='open-modal' id={option}
                            onClick={() => {
                              setIsShownModal();
                              setModalTitle(option);
                            }}/>
                  </li>
                ))}
              </ul>
            </Popup>
          </li>
        ))}
      </ul>
      <ModalWindow onClick={setIsShownModal} show={isShownModal}>
        <h2>
          {modalTitle} movie
        </h2>
        <MovieForm modalTitle={modalTitle}/>
        <DeleteForm modalTitle={modalTitle}/>
      </ModalWindow>
    </>
  );
}

export default MoviesList;
