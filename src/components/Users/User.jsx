import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../accets/images/users.jpeg";
import { NavLink } from "react-router-dom";


let User = ({user, followingInProgress, unFollow, follow}) => {
  return ( <div>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed 
              ?  <button disabled={followingInProgress.some(id => id===user.id)} 
                         onClick={() => {unFollow(user.id)}}>
                  unfollow</button>

               : ( <button disabled={followingInProgress.some(id=> id===user.id)} 
                           onClick={() => {follow(user.id)}}>
                  follow</button>)
               }
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"users.location.country"}</div>
              <div>{"users.location.city"}</div>
            </span>
          </span>
        </div>)
      }
;

export default User;
