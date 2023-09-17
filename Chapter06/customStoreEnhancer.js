const ourCustomEnhancer = createStore => (reducer, initialState, enhancer) => { 
    const store = createStore(reducer, initialState, enhancer); 
      //Add enhancer logic 
    return { 
      ...store 
      //Override the some store properties or add new properties   
     }; 
}; 