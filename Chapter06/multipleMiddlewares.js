const middleware = applyMiddleware(
  loggerMiddleware,
  firstMiddleware,
  secondMiddleware,
  thirdMiddleware
);
