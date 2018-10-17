import React from 'react';
import HeadingTitle from './HeadingTitle';
import fixtures from './HeadingTitle.fixtures';

export default story => {
  const stories = story('elements/HeadingTitle');

  stories.add('default', () => <HeadingTitle { ...fixtures } />)
}