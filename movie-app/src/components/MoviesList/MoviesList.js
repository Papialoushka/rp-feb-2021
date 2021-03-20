import MovieCard from '../MovieCard/MovieCard';
import ResultsCount from '../ResultsCount/ResultsCount';
import ModalWindow from '../ModalWindow/ModalWindow';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import MovieForm from '../Form/Form';
import DeleteForm from '../Form/DeleteForm';
import { useState, useEffect, useCallback, useRef } from 'react';
import useToggle from '../../hooks/useToggle';

const MoviesList = ({ moviesList = [], showDetail, onActivateMovie }) => {
  const [isShownPopup, setIsShownPopup] = useToggle();
  const [isShownModal, setIsShownModal] = useToggle();
  const [modalTitle, setModalTitle] = useState('none');

  const editOptions = ['edit', 'delete'];

  const onDeleteMovie = (id) => {
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
              onActivateMovie={onActivateMovie}
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
                  <li>
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
