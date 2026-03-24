import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/layers.css';
import './styles/base.css';
import './styles/reset.css';
import './styles/utils.css';
import './styles/override.css';

import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Why } from './pages/Why';
import { How } from './pages/How';
import { ComponentModel } from './pages/ComponentModel';
import { Layers } from './pages/Layers';
import { Example } from './pages/Example';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why" element={<Why />} />
          <Route path="/how" element={<How />} />
          <Route path="/components" element={<ComponentModel />} />
          <Route path="/layers" element={<Layers />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
