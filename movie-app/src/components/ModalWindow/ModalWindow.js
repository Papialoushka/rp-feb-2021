import Button from '../Button/Button';
import style from './ModalWindow.module.scss';

const ModalWindow = (props) => {
  const onClick = (e) => props.onClick && props.onClick(e);

  if (!props.show) {
    return null;
  } else {
    return (
      <div className={style.modal}>
        <div className={style.inner}>
          {props.children}
          <Button className={style.button} onClick={e => onClick(e)} name='Close modal dialog' />
        </div>
      </div>
    );
  }
}

export default ModalWindow;

ModalWindow.propTypes = {
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};
