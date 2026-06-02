import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import './styles/layers.css';
import './styles/colors.css';
import './styles/base.css';
import './styles/reset.css';
import './styles/utils.css';
import 'cascade-kit-tools/layoutUtils/layoutUtils.css';
import 'cascade-kit-tools/mixin/mixin.css';
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
import { AIToolsPage } from './pages/AITools/AIToolsPage';
import { AboutPage } from './pages/About/AboutPage';
import { LinksPage } from './pages/Links/LinksPage';
import { CaseStudyPage } from './pages/CaseStudy/CaseStudyPage';
import { routes } from './constants/routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.why} element={<WhyPage />} />
            <Route path={routes.how} element={<HowPage />} />
            <Route path={routes.components} element={<ComponentModelPage />} />
            <Route path={routes.layers} element={<LayersPage />} />
            <Route path={routes.mixin} element={<MixinPage />} />
            <Route path={routes.layoutUtils} element={<LayoutUtilsPage />} />
            <Route path={routes.example} element={<ExamplePage />} />
            <Route path={routes.theme} element={<ThemePage />} />
            <Route path={routes.scopedStyles} element={<ScopedStylesPage />} />
            <Route path={routes.aiTools} element={<AIToolsPage />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.links} element={<LinksPage />} />
            <Route path={routes.caseStudy} element={<CaseStudyPage />} />
            <Route path="/" element={<Navigate to={routes.home} replace />} />
            <Route path="*" element={<Navigate to={routes.home} replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
