import React from 'react';
import { uniq, isNumber } from 'lodash';
import block from 'bem-cn';
import './Tile.scss';

const cn = block('tile');
const defaultColor = '#FFFFFF';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevColors: [],
      color: defaultColor
    }
  }

  generateColor() {
    const { prevColors } = this.state;
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for(var i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }

    if(prevColors.some(color => color === randomColor) || randomColor === defaultColor) {
      this.generateColor();
    }

    return randomColor;
  }

  changeColor() {
    const { prevColors, color } = this.state;
    const newState = {};
    
    if (color !== defaultColor) {
      newState.color = defaultColor;
      newState.toDefault = false;
    } else {
      const newColor = this.generateColor();
      newState.color = newColor;
      newState.toDefault = true;
      newState.prevColors = prevColors.push(newColor);
      newState.prevColors = uniq(prevColors);
    }

    this.setState(newState);
  }

  handleForceToDefault() {
    const newState = {
      color: defaultColor,
    }

    this.setState(newState, () => this.props.revertToDefault(false));
  }

  componentWillReceiveProps(nextProps) {
    const { toDefault } = nextProps;

    if (toDefault) {
      this.handleForceToDefault()
    }
  }

  render() {
    const { color } = this.state;
    const columns = this.props.columns || 1;
    const tileStyle = {
      background: color,
      width: `${100 / columns}%`
    }

    return (
      <div
        className={cn.toString()}
        onClick={() => this.changeColor()} 
        style={tileStyle}
       />
    )
  }
}

export default Tile;