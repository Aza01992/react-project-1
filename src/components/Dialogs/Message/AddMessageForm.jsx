import React from "react";
import { Field } from "redux-form";
import {reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";


const maxLength = maxLengthCreator(50);

export const AddMessageForm = (props) => {
  return(
    <form onSubmit = {props.handleSubmit}>
        <div>
          <Field component={Textarea}
                  validate={[required, maxLength]}
          name="newMessageBody" placeholder="Enter your message"/>
        </div> 
       <div>
        <button>send message</button>
        </div> 
    </form>
  )
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
