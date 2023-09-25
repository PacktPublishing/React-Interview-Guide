# Coffee Restaurant App

![Coffee Restaurant App](img/coffee-restaurant.jpg 'Coffee Restaurant App')

## Install and Setup

### Environment variable file setup

First, create a `.env.local` file and put it in the root folder. Then create a GitHub and Google client Id and secret for your `.env.local` file. Follow this guide here [https://next-auth.js.org/configuration/providers/oauth](https://next-auth.js.org/configuration/providers/oauth).

Your `.env.local` file should look like this with key-value pairs:

The `NEXTAUTH_SECRET` can be anything just create a random string as if you were generating a secure password there are many tools that can do this for you.

```shell

NEXTAUTH_SECRET="yoursecret"

GITHUB_ID="yourgithubid"

GITHUB_SECRET="yourgithubsecret"

GOOGLE_ID="yourgoogleid"

GOOGLE_SECRET="yourgooglesecret"

```

### GraphQL API Usage

The GraphQL API server is at [http://localhost:3000/graphql](http://localhost:3000/graphql)

Update the function in `utils/withApollo.js` with your GraphQL endpoint.

```javascript
export function initializeApollo(initialState = null) {
  const _apolloClient = new ApolloClient({
    // Local GraphQL endpoint

    uri: 'http://localhost:3000/graphql',

    // Your online GraphQL endpoint

    // uri: 'https://coffee-restaurant.vercel.app/graphql',

    cache: new InMemoryCache().restore(initialState || {}),
  });

  return _apolloClient;
}
```

Next, run the development server:

```bash

npm run dev

# or

yarn dev

# or

pnpm dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
