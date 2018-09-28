import React from "react";
import "./Sidebar.css";

export const Users = props => {
  const { connected, chats, user, activeChat, setActiveChat } = props;
  console.log(user);
  console.log(chats);
  // console.log(connected);
  // console.log(chats);
  let content = [];
  if (connected) {
    Object.keys(connected).map(thisUser => {
      if (user.name !== thisUser) {
        content.push(
          <div key={connected[thisUser].socketId} className={`user`}>
            <div className="user-photo" />
            <div className="user-info" />
            <div
              className="name"
              onClick={() => props.click(connected[thisUser])}
            >
              {thisUser}
            </div>
            {/* {lastMessage ? (
              <div className="last-message">
                {lastMessage.message.length > 10
                  ? lastMessage.message.substring(0, 10).concat("...")
                  : lastMessage.message}
              </div>
            ) : null} */}
          </div>
        );
      }
    });
  }
  return <div>{content}</div>;

  // {
  //   chats
  //     ? chats.map(chat => {
  //         console.log(chat);
  //         if (chat.receiver.name) {
  //           const lastMessage = chat.messages[chat.messages.length - 1];
  //           const chatSideName =
  //             chat.users.find(name => {
  //               return name !== user.name;
  //             }) || null;
  //           const classNames =
  //             activeChat && activeChat.id === chat.receiver.id ? "active" : "";

  //           return (
  //             <div
  //               key={chat.receiver.id}
  //               className={`user ${classNames}`}
  //               onClick={() => {
  //                 setActiveChat(chat);
  //               }}
  //             >
  //               <div className="user-photo">{/* pass photo in here*/}</div>
  //               <div className="user-info">
  //                 <div className="name">{chatSideName}</div>
  //                 {/* {lastMessage ? (
  //               <div className="last-message">
  //                 {lastMessage.message.length > 10
  //                   ? lastMessage.message.substring(0, 10).concat("...")
  //                   : lastMessage.message}
  //               </div>
  //             ) : null} */}
  //               </div>
  //             </div>
  //           );
  //         }

  //         return null;
  //       })
  //     : null;
  // }
};
