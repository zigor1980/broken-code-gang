import api from '../api';

export default function signInUser(login, password) {
    return async function (dispatch) {
        try {
            const user = await api.getUserByLogin(login, password);
            await api.setCurrentUser(user._id);
            dispatch({
                type: 'USER_SIGN_IN',
                _id: user._id,
                curUserInfo: user,
            });
        } catch (error) {
            dispatch({
                type: 'USER_ERROR',
                error,
            });
        }
    };
}
