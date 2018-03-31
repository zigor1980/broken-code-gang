import { combineReducers } from 'redux';
import route from './route';
import messages from './messages';

export default combineReducers({
    messages,
    route
});
