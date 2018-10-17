import React from 'react';
import TxtInput from './TxtInput';
import fixtures from './TxtInput.fixtures';

export default story => {
  const stories = story('elements/TxtInput');

  stories.add('default', () => <TxtInput { ...fixtures }/>);
}