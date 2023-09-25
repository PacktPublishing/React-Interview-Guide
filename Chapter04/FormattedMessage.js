import { IntlProvider, FormattedMessage } from 'react-intl';
import English from './translations/en.json';
import French from './translations/fr.json';

const Home = () => (
  <div>
    <h2>
      <FormattedMessage id="home.title" />
    </h2>
    <p>
      <FormattedMessage id="home.welcome" />
    </p>
  </div>
);

// We can assume that we are able to get the user's preferred language from somewhere like in user or browser settings...

const userLanguage = 'fr'; // This value can be dynamically created.

const messages = {
  en: English,

  fr: French,
};

const App = () => (
  <IntlProvider locale={userLanguage} messages={messages[userLanguage]}>
    <Home />
  </IntlProvider>
);

export default App;
