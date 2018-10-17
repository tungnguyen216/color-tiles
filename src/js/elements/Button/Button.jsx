import React from 'react';
import block from 'bem-cn';
import './Button.scss';

const cn = block('button');

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleButtonClick(e) {
    this.props.onClickButton(e.target)
  }

  render() {
    return <div className={cn().toString()}>
      <button className={cn('inner').toString()} onClick={e => this.handleButtonClick(e)}>{this.props.label}</button>
    </div>
  }
}

export default Button;