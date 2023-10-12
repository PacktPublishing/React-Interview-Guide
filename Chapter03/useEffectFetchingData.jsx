const userUrl = "https://jsonplaceholder.typicode.com/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("John");
  const [message, setMessage] = useState("");

  const userQueryOptions = {
    url: userUrl,
    name,
  };

  useEffect(() => {
    const userUrl = buildUserURL(userQueryOptions); //buildUserURL is excluded from code snippet
    fetch(userUrl)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, [userQueryOptions]);

  return (
    <>
      Users: {message}
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {users &&
        users.map((user) => (
          <div>
            Name: {user.name}
            Email: {user.email}
          </div>
        ))}
    </>
  );
}
