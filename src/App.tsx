import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import './styles/layers.css';
import './styles/base.css';
import './styles/reset.css';
import './styles/utils.css';
import 'cascade-kit-tools/layoutUtils/layoutUtils.css';
import './styles/mixin.css';
import './styles/theme.css';

import { Layout } from './components/Layout/Layout';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { HomePage } from './pages/Home/HomePage';
import { WhyPage } from './pages/Why/WhyPage';
import { HowPage } from './pages/How/HowPage';
import { ComponentModelPage } from './pages/ComponentModel/ComponentModelPage';
import { LayersPage } from './pages/Layers/LayersPage';
import { MixinPage } from './pages/Mixin/MixinPage';
import { LayoutUtilsPage } from './pages/LayoutUtils/LayoutUtilsPage';
import { ExamplePage } from './pages/Example/ExamplePage';
import { ThemePage } from './pages/Theme/ThemePage';
import { ScopedStylesPage } from './pages/ScopedStyles/ScopedStylesPage';

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
