import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./Message/AddMessageForm";
/* import { Field } from "redux-form";
import {reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls"
import { maxLengthCreator, required } from "../../utils/validators/validators"; */

const Dialogs = (props) => {
let state = props.dialogsPage;
let dialogsElements = state.dialogs.map(d => <DialogItem name = {d.name} key={d.id}id={d.id} /> );
let messagesElements = state.messages.map (m => <Message message ={m.message} key= {m.id}/>);
 let newMessageBody = state.newMessageBody;

 let addNewMessage = (values) => {
 props.sendMessage(values.newMessageBody);
 }  
if (!props.isAuth) return <Navigate to ={"/login"}/>;
 
      return (
        <div className={s.dialogs}>
          <div className={s.dialogsItems}>
        {dialogsElements}   
          </div>
        <div className={s.messages}>
       <div> {messagesElements}   </div>  
        </div> 
        <AddMessageForm onSubmit={addNewMessage}/>
         </div>
    )
}

export default Dialogs;