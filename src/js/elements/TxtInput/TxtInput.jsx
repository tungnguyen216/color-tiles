import React from 'react';
import block from 'bem-cn';
import './TxtInput.scss';

const cn = block('text-input');

class TxtInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChangeTxtInput(e) {
    const value = e.target.value;
    this.props.onChangeTxtInput(value);
  }

  render() {
    const { label, value, inputType } = this.props;

    return <div className={cn.toString()}>
      {label && <label className={cn('label').toString()}>{ label }</label>}
      <input
        type={inputType}
        className={cn('field').toString()}
        value={value}
        onChange={e => this.handleChangeTxtInput(e)} 
      />
    </div>
  }
}

export default TxtInput;