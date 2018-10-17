import React from 'react';
import block from 'bem-cn';
import { isEmpty } from 'lodash';
import TxtInput from '../../elements/TxtInput/TxtInput';
import Tile from '../../elements/Tile/Tile';
import Button from '../../elements/Button/Button';
import HeadingTitle from '../../elements/HeadingTitle/HeadingTitle';
import './TilesCreator.scss';

const cn = block('tiles-creator');
const tileWrapperCn = block('tiles-wrapper');

class TilesCreator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: '',
      columns: '',
      toDefault: false
    }
  }

  generateTiles() {
    const { rows, columns, toDefault } = this.state;
    const numberOfTiles = rows * columns;
    const tiles = [];

    for(let i = 0; i < numberOfTiles; i++) {
      tiles.push(<Tile 
        toDefault={toDefault} 
        key={i} 
        columns={columns}
        revertToDefault={bool => this.setState({ toDefault: bool})}
      />)
    }

    return tiles;
  }

  updateInput(value, type) {
    const newState = {};
    newState[type] = value;

    this.setState(newState);
  }

  changeAllToDefault() {
    this.setState({ toDefault: true });
  }

  render() {
    const headingTitle = 'Color Tiles Generator'
    const inputs = [
      {
        type: 'rows',
        label: 'Input Rows',
        value: this.state.rows
      },
      {
        type: 'columns',
        label: 'Input Columns',
        value: this.state.columns
      }
    ];
    const tiles = this.generateTiles();
    const toDefaultLabel = 'To Default Color';

    return <div className={cn.toString()}>
      <HeadingTitle label={headingTitle} />
      <div className={cn('header').toString()}>
        {inputs.map((input, i) => 
          <TxtInput
            key={i}
            className={cn('rows').toString()}
            label={input.label} 
            value={input.value}
            onChangeTxtInput={val => this.updateInput(val, input.type)}
          />
        )}
      </div>
      <div className={tileWrapperCn.toString()}>
        { tiles }
      </div>
      {!isEmpty(tiles) && 
      <div className={cn('buttons').toString()}>
        <Button 
          label={toDefaultLabel}
          onClickButton={() => this.changeAllToDefault()}
        />
      </div>}
    </div>
  }
}

export default TilesCreator;