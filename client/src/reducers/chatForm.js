export default function chatFormReducer(state, action) {
  switch (action.type) {
    case "messageSubmitted":
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}
