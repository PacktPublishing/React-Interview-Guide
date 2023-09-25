import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function ProfilePage() {
  // Get the userId param from the URL.

  let { userId } = useParams();

  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":userId" element={<ProfilePage />} />

        {/* <Route path="me" element={...} />  */}
      </Route>
    </Routes>
  );
}
