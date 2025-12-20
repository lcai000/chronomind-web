import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Import page components
import { HomePage } from './pages/Home/HomePage';
import { AppPage } from './pages/App/AppPage';
import { DemoPage } from './pages/Demo/DemoPage';
import { TeamPage } from './pages/Team/TeamPage';
import { ImpactPage } from './pages/Impact/ImpactPage';
import { AboutPage } from './pages/About/AboutPage';

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
          <Route path="team" element={<TeamPage />} />
          <Route path="impact" element={<ImpactPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;