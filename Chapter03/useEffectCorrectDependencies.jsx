useEffect(() => {
  const userOptions = {
    url: userUrl,
    name,
  };

  const userUrl = buildUserURL(userOptions);
  fetch(userUrl)
    .then((res) => res.json())
    .then((users) => setUsers(users));
}, [name]);
