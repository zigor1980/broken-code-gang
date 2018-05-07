import api from '../api';

export default function getCurUserInfo() {
    return async function (dispatch) {
        try {
            const user = await api.getCurrentUser();
            dispatch({
                type: 'USER_GET_INFO',
                curUserInfo: user,
            });
        } catch (error) {
            dispatch({
                type: 'USER_GET_INFO_ERROR',
                error,
            });
        }
    };
}
