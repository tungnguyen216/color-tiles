import { configure, storiesOf } from '@storybook/react'
import StoryRouter from 'storybook-router'
import { withKnobs } from '@storybook/addon-knobs'
import rootDecorator from './rootDecorator'

const storyBase = storyName =>
storiesOf(storyName, module)
  .addDecorator(StoryRouter())
  .addDecorator(rootDecorator)
  .addDecorator(withKnobs)

function loadStories() {
  const requireContext = require.context(
    '../src/js',
    true,
    /\.story\.jsx?$/,
  )
  requireContext
    .keys()
    .map(requireContext)
    .map(module => module.default(storyBase))
}

configure(loadStories, module);
