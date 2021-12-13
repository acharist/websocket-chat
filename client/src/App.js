import { useReducer } from "react";
import chatFormReducer from "@/reducers/chatForm";
import ChatFormContext from "@/contexts/chatForm";
import Chat from "@/components/Chat/Chat";

import "./App.css";

function App() {
  const initialState = { messages: [] };
  const [chatFormState, chatFormDispatch] = useReducer(
    chatFormReducer,
    initialState
  );

  return (
    <ChatFormContext.Provider
      value={{ chatFormState, chatFormDispatch }}
    >
      <div className="app">
        <Chat />
      </div>
    </ChatFormContext.Provider>
  );
}

export default App;
