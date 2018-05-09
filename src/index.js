import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import sendNotification from './helpers/createBrowserNotification';

import api from './api';
//
// Example of usage API
//
(async () => {
    // // Add user to our cool messenger
    // console.log('Add user', await api.addUser("Arturik", "123"));
//     //
//     // Events
//     //
//     // On status of user is changed
    // await api.onUserChangeStatus((result) => {
    //     console.log('Change status: ', result);
    // });
//
    // On user is joined to room
    // await api.onUserJoinedRoom((result) => {
    //     console.log('User joined room: ', result);
    // });
//
//     // On user is joined to room
//     await api.onUserLeavedRoom((result) => {
//         console.log('User leaved room: ', result);
//     });
//
//     // On user is joined to room
    await api.onMessage((result) => {
        const mes = result.message;
        sendNotification(result.userId, {
            body: mes,
            icon: 'icon.jpg',
            dir: 'auto',
        });
    });
//
//     //
//     // Actions
//     //
//
    // Fetch current user
    const user = await api.getCurrentUser();
    console.log('Current user', user);

    const pm = await api.isRoomExist('5ae48883cb9aa2000b70143b');
    console.log(pm);

//
//     // Fetch user information
//     console.log('User information', await api.getUser(user._id));
//
//     // Get users
    // const users = await api.getUsers({ limit: 100 });
    // console.log('List of all users', users);
//
//     // We have more users
//     if (users.next) {
//         console.log('More users', await api.getUsers(users.next));
//     }
//
//     // Create room
//     try {
//         console.log('New room created', await api.createRoom({ name: 'Test' }));
//     } catch (err) {
//         console.log(err.message);
//     }
//
    // Get list of all rooms
    // let rooms = await api.getCurrentUserRooms({limit:200});
    // console.log('All rooms', rooms);
    // rooms = await api.getRooms(rooms.next);
    // console.log('All rooms', rooms);
//     console.log('Get room info', await api.getRoom(rooms.items[0]._id));
//
//     // Try to join to first room in list
//     console.log('Join current user to room', await api.currentUserJoinRoom(rooms.items[0]._id));
//
//     // Try to join to first room in list
//     console.log('Join some user to room', await api.userJoinRoom(users.items[0]._id, rooms.items[0]._id));
//
    // Get current user list of rooms
    const rooms = await api.getCurrentUserRooms();
    console.log('Current user rooms: ', rooms);
//
    // Send message to room
    // console.log('Send message', await api.sendMessage(rooms.items[0]._id, `Test message ${Date.now()}`));

//     // Send message to room
    // console.log('Room messages', await api.getRoomMessages(rooms.items[0]._id));
//
//     // Leave room
//     console.log('Leave current user to room', await api.currentUserLeaveRoom(rooms.items[0]._id));
//
// //     console.log(api);
})();

// (async () => {
//     const user = await api.getUserByLogin('artur', '123');

//     console.log(user);

// })();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function middleware({ dispatch, getState }) {
    return next => (action) => {
        if (typeof action === 'function') {
            return action(dispatch, getState);
        }
        return next(action);
    };
}

const store = createStore(
    rootReducer,
    undefined,
    composeEnhancers(applyMiddleware(middleware)),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);


registerServiceWorker();
