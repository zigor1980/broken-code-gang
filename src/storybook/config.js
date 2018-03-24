import {configure} from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./InstanceSummaryElement.js');
    require('./Footer.js');
}

configure(loadStories, module);
