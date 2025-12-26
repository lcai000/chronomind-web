import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Import page components
import { HomePage } from './pages/Home/HomePage';
import { AppPage } from './pages/App/AppPage';
import { DemoPage } from './pages/Demo/DemoPage';

import { AboutPage } from './pages/About/AboutPage';
import { PrivacyPage } from './pages/Privacy/PrivacyPage';
import { TermsPage } from './pages/Terms/TermsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { SupportPage } from './pages/Support/SupportPage';

// Import global styles
import './styles/global.css';

/**
 * Main application component with routing configuration.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="app" element={<AppPage />} />
          <Route path="demo" element={<DemoPage />} />

          <Route path="about" element={<AboutPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;