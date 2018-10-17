import React from 'react';
import Tile from './Tile';
import fixtures from './Tile.fixtures';

export default story => {
  const stories = story('elements/Tile');

  stories.add('default', () => <Tile {...fixtures}/>);
}