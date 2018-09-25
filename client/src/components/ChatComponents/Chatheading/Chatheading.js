import React from "react";
import { Row, Col, Container } from "../../Grid";
import MaterialIcon, { colorPalette } from "material-icons-react";
import "./Chatheading.css";

const Chatheading = ({ name, numberOfUsers }) => {
console.log(numberOfUsers);

  return (
    <div class="col s12 m12 userBar">
      <div className="userPhoto">
        <img
          src="http://www.placepuppy.net/1p/200/200"
          alt=""
          className="headShot"
        />
      </div>
      <div className="userInfo">
        <p>{name}</p>
        <p>{numberOfUsers}</p>
      </div>
      <div className="icons">
        <MaterialIcon icon="account_circle" color="black" />
        <MaterialIcon icon="message" />
        <div className="indicator" />
        <span>{numberOfUsers ? numberOfUsers : null}</span>
      </div>
    </div>
  );
};

export default Chatheading;
