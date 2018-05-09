import api from '../api';

export default function signInUser(user) {
    return async function (dispatch) {
        try {
            console.log(user);
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
