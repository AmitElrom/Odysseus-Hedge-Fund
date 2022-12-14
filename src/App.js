import './App.css';

import Layout from './components/layout/layout/Layout';
import Main from './components/pages/main/Main';
import About from './components/pages/about/About';

function App() {
  return (
    <Layout dir="rtl">
      <Main />
      <About />
    </Layout>
  );
}

export default App;
