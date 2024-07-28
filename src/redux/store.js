import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: { 
       posts: [
        {id: 1, message: 'Hi, how are you', like: 1},
        {id: 2, message: 'How is your it', like: 23},
        {id: 3, message: 'Hello', like: 8},
        {id: 4, message: 'is your it', like: 13}
      ],
      newPostText: 'it-react'
      },
  dialogsPage: { 
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
        ],
      newMessageBody: ""
      }, 
    sideBar: {}
    },
  _callSubscriber () {
      console.log('state changed');
   },
  getState() {
      return this._state;
    },
    subscribe  (observer) {
      this._callSubscriber = observer;
     },
    
  dispatch(action) {  
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
  }
}



  export default store;