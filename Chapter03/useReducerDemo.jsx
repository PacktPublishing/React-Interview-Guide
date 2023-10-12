function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: action.payload };

    default:
      throw new Error();
  }
}

function init(initialCount) {
  return { count: initialCount };
}

function Counter() {
  const initialCount = 0;

  const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
    </>
  );
}
