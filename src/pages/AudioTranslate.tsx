// src/pages/AudioTranslate.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import ProgressBar from '../components/ProgressBar';

const AudioTranslate = () => {
  const [isTranslating, setIsTranslating] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleStartTranslation = () => {
    setIsTranslating(true);
    
    // Simulate translation progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          navigate('/audio-completed');
        }, 1000);
      }
    }, 500);
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto">
        <Header title="Audio Upload" />
        
        <div className="p-8 flex flex-col items-center">
          <div className="w-full max-w-xl">
            <ProgressBar progress={100} status="Uploaded!" />
            
            {isTranslating ? (
              <ProgressBar progress={progress} status="Translating..." />
            ) : (
              <button 
                onClick={handleStartTranslation}
                className="bg-[#6a3de8] text-white px-8 py-3 rounded-full block mx-auto mt-8"
              >
                Translate
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioTranslate;