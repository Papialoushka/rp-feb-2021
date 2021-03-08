import Button from '../Button';
import style from './Popup.module.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  onClick(e) {
    this.props.onClick && this.props.onClick(e);
  };

  render() {
    if (!this.props.isShownPopup) {
      return null;
    }
    return (
      <div className={style.popup}>
        {this.props.children}
        <Button onClick={e => this.onClick(e)} className={style.button} name={this.props.name} />
      </div>
    );
  }
}

export default Popup;

Popup.propTypes = {
  onClick: PropTypes.func.isRequired,
  isShownPopup: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
