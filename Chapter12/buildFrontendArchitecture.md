mkdir data
touch data/menu.js data/profile.js
touch .env.local jest.config.mjs
cd src/app
mkdir account account/menu account/profile
touch account/menu/page.js account/profile/page.js
mkdir api api/auth api/auth/"[...nextauth]"
touch api/auth/"[...nextauth]"/route.js
mkdir components graphql lib nutrition queries rewards utils
touch components/GlobalStyles.js components/MainMenu.js components/Provider.js
touch graphql/route.js
touch lib/registry.js
touch nutrition/page.js nutrition/page.test.js
touch queries/clientQueries.js
touch utils/withApollo.js utils/cors.js
touch not-found.js page.test.js
