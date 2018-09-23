import React, { Component } from 'react';
import "./UserMatches.css"

class UserCard extends Component {
render () {
return (
    <div className = "user__card__all">
<div className="row center-align valign-wrapper user__card">
    <div className="col s3"> 
    <img src = "http://www.placepuppy.net/1p/100/100" alt = "user headshot" className="youraccount__headShot responsive-img"/ >
        </div>
    <div className="col s5">
    <div className="row">
        <h5 className="user__cardname">Name</h5>
    </div>
    <div className="row  ">
        <p className="user__carddesc">This my job</p>
    </div>
    </div>
    <div className="col s4 valign-wrapper">
    <div className="row  ">
        <div className="col s6">
        <i className="fa fa-user-circle-o user__profileicon" aria-hidden="true"></i>
        </div>
        <div className="col s6">
        <i className="fa fa-wechat user__chaticon" aria-hidden="true"></i>
        </div>
    </div>
    </div>
</div>
</div>
) 

}
}

export default UserCard;