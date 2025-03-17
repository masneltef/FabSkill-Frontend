import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import ProgressBar from '../components/ProgressBar';

const AudioProgress = () => {
  const [progress, setProgress] = useState(10);
  const navigate = useNavigate();
  
  // Simulate progress increasing
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate('/audio-translate');
          }, 1500);
          return 100;
        }
        return prev + 10;
      });
    }, 800);
    
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto">
        <Header title="In progress" />
        
        <div className="p-8 flex flex-col items-center justify-center mt-20">
          <div className="w-full max-w-xl p-10 rounded-lg shadow-md bg-white">
            <ProgressBar progress={progress} status="Progress" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioProgress;