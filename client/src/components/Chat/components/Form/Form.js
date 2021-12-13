import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import useInput from "@/hooks/useInput";
import ChatFormContext from "@/contexts/chatForm";

import "./Form.css";

function Form({ ws }) {
  const userText = useInput("");
  const { chatFormDispatch } = useContext(ChatFormContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if(ws.connection) {
        ws.connection.send(userText.value);
        chatFormDispatch({ type: "messageSubmitted", payload: `sent: ${userText.value}` });
      } else {
        alert("ERROR: Not connected... refresh to try again!");
      }
    } catch(err) {
      alert(`ERROR: ${err}`);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Ваше сообщение..."
        value={userText.value}
        onChange={userText.onChange}
      />
      <button className="button">
        <FontAwesomeIcon icon={faPaperPlane} color="#263238" />
      </button>
    </form>
  );
}

export default Form;
