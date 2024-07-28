import React from "react";
import { connect } from "react-redux";
import { follow, 
        unFollow, 
        setCurrentPage, 
        toggleFollowingProgress,
        requestUsers 
        } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { getCurrentPage, 
      getFollowingInProgress, 
      getIsFetching, getPageSize,
      getTotalUsersCount, 
      getUsers } from "../../redux/users-selectors";


class UsersContainer extends React.Component {
  componentDidMount() { 
    const { currentPage, pageSize} = this.props;
    this.props.getUsers(currentPage, pageSize);
  
  }
  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.getUsers(pageNumber, pageSize);

  };
 
  render(){
     return <> 
    { this.props.isFetching ? <Preloader/> : null }
     <Users totalUsersCount={this.props.totalUsersCount} 
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage} 
                onPageChanged={this.onPageChanged.bind(this)}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
                
      />
     </>
  }
  }


  const mapStateToProps=(state) => {
    return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
    }
  }


/* const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      let action = followAC(userId);
          dispatch(action);
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
} */


export default compose(
    connect(mapStateToProps, 
  { follow, unFollow, setCurrentPage,
     toggleFollowingProgress, getUsers: requestUsers}
    ))(UsersContainer)
