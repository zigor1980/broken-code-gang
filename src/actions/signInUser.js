import api from '../api';

export default function signInUser(login, password) {
    return async function (dispatch, getState) {
        try {
            const user = await api.getUserByLogin(login, password);

            dispatch({
                type: 'USER_SIGN_IN',
                _id: user._id
            })

            return user;
        } catch (error) {
            dispatch({
                type: 'USER_ERROR',
                error,
            });
        }
    };
}
