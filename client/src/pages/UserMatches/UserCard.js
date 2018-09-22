import React, { Component } from 'react';

class UserCard extends Component {
render () {
return (
<div className="row center-align valign-wrapper user__card">
    <div className="col s3"> 
        <img src="" class="" alt="" /> </div>
    <div className="col s6">
    <div className="row center-align valign-wrapper">
        <h3 className="user__cardname">Hello</h3>
        <p className="user__carddesc">This my job</p>
    </div>
    </div>
    <div className="col s3">
        <p>
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        <i className="fa fa-wechat" aria-hidden="true"></i>
        </p>
    </div>
</div>) 

}
}

export default UserCard;