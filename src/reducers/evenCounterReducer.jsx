
export const evenCounterReducer = (state = 2, action) => {
  switch (action.type) {
    case "INCREVEN":
      return state + 2;
    case "DECREVEN":
      return state - 2;
    default:
      return state;
  }
};

