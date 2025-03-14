// src/pages/AudioCompleted.tsx
import { useRef, useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/header';
import ProgressBar from '../components/ProgressBar';

const AudioCompleted = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto">
        <Header title="Audio Uploaded" />
        
        <div className="p-8 flex flex-col items-center">
          <div className="w-full max-w-xl">
            <ProgressBar progress={100} status="Translated" />
            
            {/* Audio Player */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={togglePlay}
                  className="bg-[#6a3de8] text-white rounded-full h-10 w-10 flex items-center justify-center"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </button>
                
                <div className="text-sm">0:00 / 1:23</div>
                
                <div className="flex-1 h-2 bg-gray-300 rounded-full">
                  <div className="h-2 bg-[#6a3de8] rounded-full w-0"></div>
                </div>
                
                <button className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01-.707-7.07m-2.122 9.9a9 9 0 010-12.728" />
                  </svg>
                </button>
                
                <button className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
              
              {/* Hidden audio element */}
              <audio 
                ref={audioRef} 
                src="/path/to/audio.mp3" // Replace with actual path
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>
            
            {/* Captions */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow">
              <p className="text-lg">
                Captions Lorem Ipsum dolar sit amet Captions Lorem Ipsum dolar sit amet
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCompleted;