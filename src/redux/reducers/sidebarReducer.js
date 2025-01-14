const initialState = {
  isOpen: true,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "SET_SIDEBAR":
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
