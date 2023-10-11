import React, { useState } from "react";

function User() {
  const [message, setMessage] = useState("Welcome to React world");
  return (
    <>
      <h1>{message}</h1>
    </>
  );
}
