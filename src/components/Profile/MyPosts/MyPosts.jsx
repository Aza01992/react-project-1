import React from 'react';
import  s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field } from 'redux-form';
import {reduxForm} from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';



const maxLength10 = maxLengthCreator(10);
const minLength2 = minLengthCreator(2)

let AddNewPostForm = (props) => {
      return  <form onSubmit={props.handleSubmit}>
     <div>
    <Field  name="newPostText" 
    component={Textarea} 
    placeholder={'Post message'}
    validate={[required, maxLength10, minLength2]}  
    />
    </div>
 <div>
     <button type="submit">Add post</button>
  </div>  
</form>
}
let  AddNewPostFormRedux =  reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const MyPosts = (props) => {

    let postsElements =
      [...props.posts]
          .reverse()
          .map(posts => <Post message={posts.message} like={posts.like}/>)

   /*  let newPostElement = React.createRef(); */

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
}
    return (
    <div className={s.postsBlock}>
        <h3>My posts </h3> 
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={s.posts}>
             {postsElements}
          </div>
        </div>
    )
  }
   
export default MyPosts;