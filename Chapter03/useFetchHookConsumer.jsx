import useFetchData from "./useFetchData.js";

export default function Posts() {
  const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
  const { data, loading } = useFetchData(url, []);

  return (
    <>
      {loading && <p>Loading posts... </p>}
      {data &&
        data.map((item) => (
          <div key={item?.title}>
            <p>
              {item?.title}
              <br />
              {item?.body}
            </p>
          </div>
        ))}
    </>
  );
}
