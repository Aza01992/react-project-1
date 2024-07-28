import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useParams, useNavigate} from 'react-router-dom';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reducer.js';
import { compose } from 'redux';

export function withRouter(Children){
  return(props)=>{
    const params = useParams();
    const navigate = useNavigate();
    return <Children {...props} params={params} navigate={navigate} />;
  };
}


class ProfileContainer extends React.Component  {
 
    componentDidMount() { 

      let userId = this.props.match.params.userId;
      if(!userId) {
        userId = this.props.authorizedUserId;
        if (!userId) {
          this.props.navigate("/login");
        }
    }
    this.props.getUserProfile(userId);
      this.props.getStatus(userId);
    }
    render() {
     
    return (
        <div> 
            <Profile {...this.props} 
            profile={this.props.profile} 
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>
           
        </div>

        )
    }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth

});

export default compose (
  connect (mapStateToProps,{getUserProfile, getStatus, updateStatus}),
    withRouter,
  /*   withAuthRedirect */
  )(ProfileContainer);