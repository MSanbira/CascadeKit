import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import './styles/layers.css';
import './styles/base.css';
import './styles/reset.css';
import './styles/utils.css';
import './styles/layoutUtils.css';
import './styles/mixin.css';
import './styles/override.css';
import './styles/theme.css';

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
import { ThemePage } from './pages/Theme';
import { ScopedStylesPage } from './pages/ScopedStyles';

function App() {
  return (
    <ThemeProvider>
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
            <Route path="/theme" element={<ThemePage />} />
            <Route path="/scoped-styles" element={<ScopedStylesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
