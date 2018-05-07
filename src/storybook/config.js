import { configure } from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./InstanceSummaryElement.js');
    require('./Footer.js');
    require('./Header.js');
    require('./ConfirmActionDialog.js');
    require('./Button.js');
}

configure(loadStories, module);
