import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'it-react/auth/SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
   };

const authReducer = (state = initialState, action) => {
   switch(action.type) {
    case SET_USER_DATA: 
     return {
         ...state,
        ...action.payload
    };
    default:
         return state;
}
}
 export const SetAuthUserData = (id, email, login, isAuth) => 
({ type: SET_USER_DATA, payload: {id, email, login, isAuth}})


export const getAuthUserData = () => async (dispatch) => {
  let response =  await authAPI.me();
      if(response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          dispatch(SetAuthUserData(id, email, login, true));
      }
    };
  

 export const login = (email, password, rememberMe) => async(dispatch)=> {
         
     let response = await authAPI.login(email, password, rememberMe);
        if(response.data.resultCode === 0){
          dispatch(getAuthUserData());
        } else { 
          let message = response.data.messages.length > 0 ?  response.data.messages[0] : "some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
      };
export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
      if(response.data.resultCode === 0){
        dispatch(SetAuthUserData(null, null, null, false));
      }
    };
 export default authReducer;
