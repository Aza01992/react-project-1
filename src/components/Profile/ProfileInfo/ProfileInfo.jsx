import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
     if (!props.profile) {
        return <Preloader/>
    }
    return (
    <div>     
  
    <div className={s.descriptionBlock}>
        <img src = {props.profile.photos.large}/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

  <div></div>
    </div>
    </div>
    )}
export default ProfileInfo;