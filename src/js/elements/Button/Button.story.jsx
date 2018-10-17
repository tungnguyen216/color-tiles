import React from 'react';
import Button from './Button';
import fixtures from'./Button.fixtures';

export default story => {
  const stories = story('elements/Button');

  stories.add('default', () => <Button { ...fixtures }/>)
}