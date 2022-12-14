import Layout from './components/layout/layout/Layout';
import Main from './components/pages/main/Main';
import About from './components/pages/about/About';

import classes from './App.module.css';
import ValuesAndArticles from './components/pages/values and articles/values and articles/ValuesAndArticles';

function App() {
  return (
    <Layout className={classes.App} dir="rtl">
      <Main />
      <About />
      <ValuesAndArticles />
    </Layout>
  );
}

export default App;
