export function addRoom({user}) {
    return async function (dispatch, getState) {
        try {
            // Loading
            let rooms = await api.getCurrentUserRooms();
            let roomExist = rooms.find((el) => {
                if (el.users.length == 2){
                    return el.users.some((elem) =>
                        elem._id == user._id
                    )
                }
                return false
            });
            let room = null;
            if (!roomExist){
                let curUser = await api.getCurrentUser();
                room = await api.createRoom(`${user.name}`);//another one
                room = await api.currentUserJoinRoom(room._id);
                room = await api.userJoinRoom(user._id, room._id);

                dispatch({
                    type: 'ROOM_ADD',
                    rooms: room,
                });
            } else {
                //Код перехода на существующий диалог с пользователем
            }
        } catch (error) {
            dispatch({
                type: 'FEED_ERROR',
                error
            });
        } finally {
            dispatch({
                type: 'FEED_LOADING',
            });
        }

    };
}
