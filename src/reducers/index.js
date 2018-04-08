import { combineReducers } from 'redux';
import route from './route';
import messages from './messages';
import rooms from './rooms';
import users from './users';

export default combineReducers({
    rooms,
    messages,
    route,
    users,
});
