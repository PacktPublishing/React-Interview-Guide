const ourCustomEnhancer =
  (createStore) => (reducer, initialState, enhancer) => {
    const customReducer = (state, action) => {
      // Logic to return new state
    };
    const store = createStore(customReducer, initialState, enhancer);
    //Add enhancer logic
    return {
      ...store,
      //Override the some store properties or add new properties
    };
  };
