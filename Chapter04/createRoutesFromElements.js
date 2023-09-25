createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="connect" element={<ConnectPage />} />
      <Route
        path="admin"
        element={<Admin />}
        loader={({ request }) =>
          fetch('/data/api/admnin.json', {
            signal: request.signal,
          })
        }
      />
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} loader={redirectIfUser} />
        <Route path="logout" action={logoutUser} />
      </Route>
    </Route>
  )
);
