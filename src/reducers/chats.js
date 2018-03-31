import { CHAT_ADD, addChat }  from '../actions/chatAction';
import { CHAT_RESET, resetChats }  from '../actions/chatAction';


const reducer = (state, action) => {
    if (!state) {
        return {
            chats: {
                items: []
            }
        };
    }

           if (action.type === CHAT_ADD) {
                return {
                   ...state,
                //    chats:  [...state.chats, {
                //         "avatar": {
                //             "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                //             "modifier": "avatar-s"
                //         },
                //         "title": "lolollololololololo",
                //         "description": "Да, зафиксирую информацию про завтра.\n" +
                //         "Ждём всех в 10.00. Не опаздывать!\n" +
                //         "ШРИкатон продлится до 18.00.\n" +
                //         "С собой: ноутбуки. Лучше подготовиться и установить на них nodejs и mongodb",
                //         "author": "Bibushik",
                //         "id": 1
                //     }]
                    
                }
           }

           if (action.type === CHAT_RESET) {
            return {
                ...state,
                chats: action.chats
            };
         }
        }
   
  
  
  export default reducer;
  