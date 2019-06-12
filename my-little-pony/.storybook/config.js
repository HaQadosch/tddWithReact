import { configure, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);
addDecorator(withA11y);
addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
});

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
