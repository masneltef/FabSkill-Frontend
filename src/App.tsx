// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AudioUpload from './pages/AudioUpload';
import AudioProgress from './pages/AudioProgress';
import AudioTranslate from './pages/AudioTranslate';
import AudioCompleted from './pages/AudioCompleted';
import Interviews from './pages/Interview';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Candidates from './pages/Candidates';
import Settings from './pages/Settings';
import Help from './pages/Help';
import JoinInterview from './pages/JoinInterview';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Main Dashboard Routes */}
        <Route path="/overview" element={<Overview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/join-interview" element={<JoinInterview />} />
        
        {/* Audio Processing Flow */}
        <Route path="/audio-upload" element={<AudioUpload />} />
        <Route path="/audio-progress" element={<AudioProgress />} />
        <Route path="/audio-translate" element={<AudioTranslate />} />
        <Route path="/audio-completed" element={<AudioCompleted />} />
        
        {/* Settings and Help */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;