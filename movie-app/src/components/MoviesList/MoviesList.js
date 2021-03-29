import { useState, useEffect, useCallback, useRef } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { MovieCard } from '../MovieCard';
import { ResultsCount } from '../ResultsCount';
import { ModalWindow } from '../ModalWindow';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import MovieForm from '../Form/Form';
import { DeleteForm } from '../Form';
import useToggle from '../../hooks/useToggle';

const editOptions = ['edit', 'delete'];

const MoviesList = ({ moviesList = [], showDetail, onActivateMovie }) => {
  const [isShownPopup, setIsShownPopup] = useToggle();
  const [isShownModal, setIsShownModal] = useToggle();
  const [modalTitle, setModalTitle] = useState('none');
  const [movieToTarget, setMovieToTarget] = useState(null);

  return (
    <>
      <h2 className='results-count'>
        {ResultsCount(moviesList)}
      </h2>
      <ul className='movies-list'>
        {moviesList.map((movie) => (
          <li key={uuidv4()}>
            <MovieCard
              movie={movie}
              key={movie.id}
              onActivateMovie={onActivateMovie}
              genres={movie.genres}
            >
              <Button name='Edit or delete the movie' className='open-popup'
                      onClick={() => {
                        setIsShownPopup();
                      }}/>

              <Popup onClick={setIsShownPopup} name='Close edit options'
                     isShownPopup={isShownPopup}>
                <ul>
                  {editOptions.map((option) => (
                    <li key={option}>
                      <Button name={option} className='open-modal' id={option}
                              onClick={() => {
                                setIsShownModal();
                                setModalTitle(option);
                                setMovieToTarget(movie);
                              }}/>
                    </li>
                  ))}
                </ul>
              </Popup>
            </MovieCard>
          </li>
        ))}
      </ul>
      <>
        {
          (isShownModal) && <ModalWindow onShow={setIsShownModal}>
            <h2>
              {modalTitle} movie
            </h2>
            <>
              {
                (modalTitle === 'delete') ? <DeleteForm modalTitle={modalTitle} movie={movieToTarget}/> :
                  <MovieForm movie={movieToTarget}/>
              }
            </>
          </ModalWindow>
        }
      </>
    </>
  );
}

export default MoviesList;
