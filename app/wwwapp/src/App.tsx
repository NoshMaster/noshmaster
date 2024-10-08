import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstallationPage from './pages/Docs/InstallationPage';
import FadeInPage from './pages/Docs/FadeInPage';
import PerspectiveEffectPage from './pages/Docs/PerspectiveEffectPage';
import Example from './pages/Example';
import CounterPage from './pages/Docs/CounterPage';
import TiltPage from './pages/Docs/TiltPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<InstallationPage />} />
        <Route path="/example" element={<Example />} />
        <Route path="/docs/installation" element={<InstallationPage />} />
        <Route path="/docs/animation/fade-in" element={<FadeInPage />} />
        <Route path="/docs/animation/perspective" element={<PerspectiveEffectPage />} />
        <Route path="/docs/animation/counter" element={<CounterPage />} />
        <Route path="/docs/animation/Tilt" element={<TiltPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
