const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   dialogs: 
   [
     {id: 1, name: 'Ivanic'},
     {id: 2, name: 'Andrey'},
     {id: 3, name: 'Sveta'},
     {id: 4, name: 'Lena'},
     {id: 5, name: 'Valera'}
   ],
   messages: [
     {id: 1, message: 'Hi'},
     {id: 2, message: 'How is your it'},
     {id: 3, message: 'Hello Lena'},
     {id: 4,  message: 'Hi'},
     {id: 5,  message: 'Yo'}
     ]
   };

const dialogsReducer = (state = initialState, action) => {
   switch(action.type) {
  case SEND_MESSAGE: 
     let body = action.newMessageBody;
     return {
      ...state,
      messages: [...state.messages, {id: 6, message: body}]
     };
    default:
         return state;
}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


 export default dialogsReducer;
