import { configure, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import requireContext from 'require-context.macro';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

// const req = require.context('../src/stories', true, /\.stories\.tsx$/);
const req = requireContext('../src/stories', true, /\.stories\.tsx$/);

function loadStories() {
  require('./sample.stories');
  require('../src/stories/App.stories');
  req.keys().forEach(req);
}

configure(loadStories, module);
