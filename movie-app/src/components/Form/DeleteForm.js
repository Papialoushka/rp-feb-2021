import Button from '../Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';

const DeleteForm = (props) => {
  if (!(props.modalTitle === 'delete')) {
    return null;
  }
  else {
    return (
      <>
        <p>
          Are you sure you want to delete this movie?
        </p>
        <Button className={primaryButton.primaryButton} name='Confirm'/>
      </>
    );
  }
};

export default DeleteForm;
