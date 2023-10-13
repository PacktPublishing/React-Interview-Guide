const loggerMiddleware = (store) => (next) => (action) => {
  console.log("action", action);
  return next(action);
};
