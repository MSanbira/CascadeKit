import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/layers.css';
import './styles/base.css';
import './styles/reset.css';
import './styles/utils.css';
import './styles/layoutUtils.css';
import './styles/mixin.css';
import './styles/override.css';

import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/Home';
import { WhyPage } from './pages/Why';
import { HowPage } from './pages/How';
import { ComponentModelPage } from './pages/ComponentModel';
import { LayersPage } from './pages/Layers';
import { MixinPage } from './pages/Mixin';
import { LayoutUtilsPage } from './pages/LayoutUtils';
import { ExamplePage } from './pages/Example';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/why" element={<WhyPage />} />
          <Route path="/how" element={<HowPage />} />
          <Route path="/components" element={<ComponentModelPage />} />
          <Route path="/layers" element={<LayersPage />} />
          <Route path="/mixin" element={<MixinPage />} />
          <Route path="/layout-utils" element={<LayoutUtilsPage />} />
          <Route path="/example" element={<ExamplePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
