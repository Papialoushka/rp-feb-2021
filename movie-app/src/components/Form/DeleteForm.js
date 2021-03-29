import { connect, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';
import { deleteMovie } from '../../redux/reducers';

const DeleteForm = ({ movie, ...props }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        Are you sure you want to delete this movie?
      </p>
      <Button className={primaryButton.primaryButton} name='Confirm'
              onClick={() => dispatch(deleteMovie(movie.id))}/>
    </>
  );
};
export { DeleteForm };
