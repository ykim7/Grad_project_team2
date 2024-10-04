import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./Chat.css"; // CSS 파일
import { useSelector } from "react-redux";

let socket;

function Chat() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [room, setRoom] = useState("");
  const user = useSelector((state) => state.auth.user);
  const userName = `${user.firstName} ${user.lastName}`;
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [roomSize, setRoomSize] = useState(0);
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    socket = io("http://localhost:4000");

    socket.on("receive_message", (data) => {
      setMessageList((prevMessageList) => [...prevMessageList, data]);
    });

    socket.on("room_event", (data) => {
      setMessageList((prevMessageList) => [
        ...prevMessageList,
        { author: "System", message: data.message },
      ]);
    });

    socket.on("room_size", (size) => {
      setRoomSize(size);
    });

    socket.on("room_list", (list) => {
      setRoomList(list);
    });

    // 채팅 그룹 리스트를 요청
    socket.emit("request_room_list");

    return () => {
      socket.disconnect();
    };
  }, []);

  const connectToRoom = () => {
    setLoggedIn(true);
    socket.emit("join_room", { room: room, userName: userName });
  };

  const sendMessage = () => {
    let messageContent = {
      room: room,
      content: {
        author: userName,
        message: message,
      },
    };

    socket.emit("send_message", messageContent);
    setMessageList((prevMessageList) => [
      ...prevMessageList,
      messageContent.content,
    ]);
    setMessage("");
  };

  return (
    <div className="Chat">
      {!loggedIn ? (
        <div className="logIn">
          <div className="roomList">
            <span>
              Activating room:{" "}
              {roomList.map((room) => (
                <div>{room}</div>
              ))}
            </span>
          </div>
          <input
            type="text"
            placeholder="Room..."
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={connectToRoom}>Enter Chat</button>
        </div>
      ) : (
        <div className="chatContainer">
          <div className="roomInfo">
            <span>Users in room: {roomSize}</span>
          </div>
          <div className="messages">
            {messageList.map((val, key) => (
              <div
                key={key}
                className="messageContainer"
                id={val.author === userName ? "You" : "Other"}
              >
                <div className="messageIndividual">
                  {val.author}: {val.message}
                </div>
              </div>
            ))}
          </div>
          <div className="messageInputs">
            <input
              type="text"
              placeholder="Message..."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
