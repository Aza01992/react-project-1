import React, {Component} from "react";
/* import s from './ProfileInfo.module.css'; */

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };
  activateEditMode = () => {
     this.setState( {
          editMode: true
     });
    // console.log(this.state.editMode);
  }
  deactivateEditMode = () => {
     this.setState({
          editMode: false
     });
     this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
      this.setState({
        status: e.currentTarget.value
      });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate called");
   if (prevProps.status !== this.props.status) {
    console.log("Status updated:", this.props.status);
    this.setState({
      status: this.props.status
    });
   }
  }
  render() {
    
    return (
      <div>
        {!this.state.editMode && (
               <div>
                    <span onDoubleClick={this.activateEditMode} >{this.props.status || "no status"}</span>
               </div>
        )}
        {this.state.editMode && (
               <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} 
                          value={this.state.status} />
               </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
