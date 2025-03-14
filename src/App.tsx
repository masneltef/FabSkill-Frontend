import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AudioUpload from './pages/AudioUpload';
import AudioProgress from './pages/AudioProgress';
import AudioTranslate from './pages/AudioTranslate';
import AudioCompleted from './pages/AudioCompleted';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Audio Processing Flow */}
        <Route path="/audio-upload" element={<AudioUpload />} />
        <Route path="/audio-progress" element={<AudioProgress />} />
        <Route path="/audio-translate" element={<AudioTranslate />} />
        <Route path="/audio-completed" element={<AudioCompleted />} />
      </Routes>
    </Router>
  );
}

export default App;