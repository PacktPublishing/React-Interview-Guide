const useFetchData = (url, initialData) => {
  useDebugValue(url);
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useDebugValue(error, (err) =>
    err ? `fetch is failed with ${err.message}` : "fetch is successful"
  );

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  useDebugValue(data, (items) =>
    items.length > 0 ? items.map((item) => item.title) : "No posts available"
  );
  return { data, loading };
};
