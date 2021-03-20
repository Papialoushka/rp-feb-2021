import Button from '../Button/Button';
import style from './Popup.module.scss';

const Popup = (props) => {
  const onClick = (e) => props.onClick && props.onClick(e);

  if (!props.isShownPopup) {
    return null;
  } else {
    return (
      <div className={style.popup}>
        {props.children}
        <Button onClick={e => onClick(e)} className={style.button} name={props.name} />
      </div>
    );
  }
};

export default Popup;

Popup.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShownPopup: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
