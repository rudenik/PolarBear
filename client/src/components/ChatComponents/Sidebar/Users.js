import React from "react";
import "./Sidebar.css";

export const Users = props => {
  console.log(props.users)
  return (
    <div className="specific_user" onClick={props.click.bind(this,props.users._id)}>{props.users.name}</div>
    )

}