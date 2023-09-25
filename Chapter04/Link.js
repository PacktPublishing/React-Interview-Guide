import { Link } from 'react-router-dom';

<Link
  to={{
    pathname: '/route',
    state: { myData: 'Hello, World!' },
  }}
>
  My Link
</Link>;
