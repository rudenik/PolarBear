import React from "react";
import "./Sidebar.css";


export const Users = props => {
  const { connected, chats } = props;
  console.log(connected);
  console.log(chats);
  let content = [];
  if (connected) {
    Object.keys(connected).map(users => {
      content.push(
        <div
          key={connected[users].socketId}
          className={`user`}
          onClick={() => {
            // setActiveChat(chat);
          }}
        />,
        <div className="user-photo" />,
        <div className="user-info" />,
        <div className="name">{users}</div>
      );
    });
  }

  return <div>{content}</div>;
};
