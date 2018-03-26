import {configure} from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./InstanceSummaryElement.js');
    require('./UserPage.js');
    require('./ChatList.js');
    require('./UserList.js');
}

configure(loadStories, module);
