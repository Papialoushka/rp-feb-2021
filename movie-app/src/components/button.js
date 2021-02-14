import React from 'react';

class Button extends React.PureComponent {
  constructor(props) {
    super();
    this.baseClass = 'button';
  }

  render() {
    return (
      <button className={`${this.baseClass} ${this.props.className}`}>{this.props.name}</button>
    );
  }
}

export default Button;
