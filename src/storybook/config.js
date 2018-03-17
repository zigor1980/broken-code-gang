import { configure } from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
}

configure(loadStories, module);