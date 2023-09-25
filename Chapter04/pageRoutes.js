<Routes>
  <Route path="/" element={<Menu />}>
    <Route path="messages" element={<MenuItems />} />
    <Route path="actions" element={<MenuActions />} />
  </Route>

  <Route path="about" element={<About />} />
</Routes>;
