import React from "react";
import { Row, Col, Container } from "../../Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chatheading.css";

const Chatheading = (props) => {
console.log(props.currentUser);


  return (
    <div className="col s12 m12 userBar">
      <div className="userPhoto">
        <img
          src={props.currentUser?props.currentUser.photoUrl:null}
          alt=""
          className="headShot"
        />
      </div>
      <div className="userInfo">
        <p>{props.currentUser?props.currentUser.user:null}</p>
        <p>{props.currentUser?"Developer":null}</p>
      </div>
      <div className="icons">
        <MaterialIcon icon="account_circle" color="black" />
        <MaterialIcon icon="message" />
        <div className="indicator" />
        <span></span>
      </div>
    </div>
  );
};

export default Chatheading;
