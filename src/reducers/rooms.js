export default function rooms(state, action) {
   if (!state) {
       return {
           rooms: [{
           }]
       };
   }
   switch (action.type){
       case 'ROOM_ADD':
           return {
               ...state,
               rooms: state.rooms.concat(action.rooms),
           };
       default:
           return state;
   }
}
