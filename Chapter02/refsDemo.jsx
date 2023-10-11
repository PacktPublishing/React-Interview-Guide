import { useRef, useEffect } from "react";

export default function SignUpForm() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <input type="email" ref={inputRef} />
      <button>Verify Email</button>
    </>
  );
}
