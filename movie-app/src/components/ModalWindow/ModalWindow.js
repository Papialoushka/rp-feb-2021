import Button from '../Button';
import style from './ModalWindow.module.scss';


class ModalWindow extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={style.modal}>
        <div className={style.inner}>
          {this.props.children}
          <Button className={style.button} onClick={e => this.onClick(e)} name='Close modal dialog' />
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
