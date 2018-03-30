import {configure} from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./ChatPage.js');
    require('./InstanceSummaryElement.js');
    require('./Footer.js');
    require('./FooterNav.js');
    require('./Header.js');
    require('./UserPage.js');
    require('./ChatList.js');
    require('./UserList.js');
    require('./ChatListPage');
    require('./GroupChatSettings.js');
    require('./AddUser.js');
    require('./ConfirmActionDialog.js');
}

configure(loadStories, module);
