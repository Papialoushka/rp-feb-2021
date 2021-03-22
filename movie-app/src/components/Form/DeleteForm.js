import { connect } from 'react-redux';

import Button from '../Button/Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';
import { deleteMovie, getGenres } from '../../redux/actions';

const DeleteForm = ({ movie, ...props }) => {
  if (!(props.modalTitle === 'delete')) {
    return null;
  }
  else {
    return (
      <>
        <p>
          Are you sure you want to delete this movie?
        </p>
        <Button className={primaryButton.primaryButton} name='Confirm' onClick={() => props.deleteMovie(movie)} />
      </>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (movie) => dispatch(deleteMovie(movie)),
  }
}


export default connect(null, mapDispatchToProps)(DeleteForm);
