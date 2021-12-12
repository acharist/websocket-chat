export default function chatFormReducer(state, action) {
  switch (action.type) {
    case "userTyped":
      return {
        ...state,
        userTyped: action.payload,
      };
    case "messageSubmitted":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}
