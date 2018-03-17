import { configure } from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./Header.js');
}

configure(loadStories, module);