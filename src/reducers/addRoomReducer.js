export function roomReducer(state, action) {
   if (!state) {
       return {
           rooms: [{
           }]
       };
   }

   if (action.type === 'ROOM_ADD') {
      return {
          ...state,
          rooms: state.rooms.concat(action.rooms),
      };
   }

   return state;
}
