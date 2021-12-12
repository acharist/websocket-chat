import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";

import ChatFormContext from "../../contexts/chatForm";

import { useContext, useEffect, useMemo } from "react";

import "./Chat.css";

function Chat() {
  const { chatFormState, chatFormDispatch } = useContext(ChatFormContext);

  let ws = useMemo(
    () => ({
      connection: new WebSocket("ws://localhost:8080"),
      close() {
        this.ws = null;
      },
    }),
    []
  );

  useEffect(() => {
    if (ws.connection) {
      ws.connection.onopen = () => {
        console.log("Connected to Server");
      };

      ws.connection.onmessage = ({ data }) => {
        chatFormDispatch({
          type: "messageSubmitted",
          payload: `received: ${data}`,
        });
      };
    } else {
      alert("ERROR: Not connected... refresh to try again!");
    }

    return () => {
      if(ws.connection) {
        ws.connection.onclose = () => {
          ws.close();
          alert("Connection closed... refresh to try again!");
        };
      }
    }
  }, [chatFormState, chatFormDispatch, ws]);

  useEffect(() => {
    console.log("chatFormState", chatFormState);
  }, [chatFormState]);

  return (
    <div className="chat">
      <Header />
      <Content>
        {chatFormState.messages.map((message, index) => (
          <div key={`${message}${index}`}>{message}</div>
        ))}
      </Content>
      <Form ws={ws} />
    </div>
  );
}

export default Chat;
