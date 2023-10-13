const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { name, priority } = action.payload;
      return [...state.todos, { name, priority }];

    default:
      return state;
  }
};
