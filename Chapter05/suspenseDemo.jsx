import { Suspense } from "react";

import Posts from "./posts.js";

export default function Author({ author }) {
  return (
    <>
      <h1>{author.name}</h1>
      <span>{author.age}</span>
      <Suspense fallback={<Loading />}>
        <Posts authorId={author.id} />
      </Suspense>
    </>
  );
}

function Loading() {
  return <h2>Loading...</h2>;
}
