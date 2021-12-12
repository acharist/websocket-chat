import { useReducer } from "react";

// Reducers
import chatFormReducer from "./reducers/chatForm";

// Contexts
import ChatFormContext from "./contexts/chatForm";

// Components
import Chat from "./components/Chat/Chat";

import "./App.css";

function App() {
  const initialState = { userTyped: '', messages: [] };
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
