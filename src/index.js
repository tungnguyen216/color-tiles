import React from 'react';
import { render } from 'react-dom';
import './sass/main.scss';
import Tile from './js/elements/Tile/Tile';
import TilesCreator from './js/containers/TilesCreator/TilesCreator';


const App = () =>{
  return (
    <div>
      <TilesCreator/>
    </div>
  )
};
render(<App />, document.getElementById('app'));