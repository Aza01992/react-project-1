import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let state = {
  posts: [
    {id: 1, message: 'Hi, how are you', like: 1},
    {id: 2, message: 'How is your it', like: 23},
    {id: 3, message: 'Hello', like: 8},
    {id: 4, message: 'is your it', like: 13}
  ]
  };
test('length of posts should be incremented', () => {
  
  let action = addPostActionCreator("it-react");
  
 let newState = profileReducer(state, action);

 expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
  
  let action = addPostActionCreator("it-react");
 
 let newState = profileReducer(state, action);

 expect(newState.posts[4].message).toBe("it-react");
});


test('after deleting length of messages should be decrement', () => {

  let action = deletePost(1);


  let newState = profileReducer(state, action);

expect(newState.posts.length).toBe(3);
});

test('after deleting length shouldnt be decrement if id is incorrect', () => {

  let action = deletePost(100);


  let newState = profileReducer(state, action);

expect(newState.posts.length).toBe(4);
});

