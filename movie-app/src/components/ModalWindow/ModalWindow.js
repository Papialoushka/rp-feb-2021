import Button from '../Button/Button';
import style from './ModalWindow.module.scss';

const ModalWindow = ({ onShow, ...props }) => {
  return (
    <div className={style.modal}>
      <div className={style.inner}>
        {props.children}
        <Button className={style.button} onClick={onShow} name='Close modal dialog'/>
      </div>
    </div>
  );
};


ModalWindow.propTypes = {
  onShow: PropTypes.func.isRequired,
};

export {
  ModalWindow
};
