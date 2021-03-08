import Button from '../Button';
import primaryButton from './../../styles/PrimaryButton.Module.scss';

class DeleteForm extends React.Component {
  render() {
    if (!(this.props.modalTitle === 'delete')) {
      return null;
    }
    return (
      <>
        <p>
          Are you sure you want to delete this movie?
        </p>
        <Button className={primaryButton.primaryButton} name='Confirm' />
      </>
    );
  }
}

export default DeleteForm;
