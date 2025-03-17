import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';

const AudioUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      // Once file is selected, show progress
      simulateUpload();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
      // Once file is dropped, show progress
      simulateUpload();
    }
  };

  // Simulate the upload process
  const simulateUpload = () => {
    navigate('/audio-progress');
  };

  const handleTranslate = () => {
    navigate('/audio-translated');
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu"
        userImage="/path/to/user-image.jpg" // Replace with actual path
      />
      
      <div className="flex-1 overflow-auto">
        <Header title="Audio Upload" />
        
        <div className="p-8">
          {isUploaded ? (
            <div className="mx-auto max-w-2xl">
              <ProgressBar progress={100} status="Uploaded!" />
              <button 
                onClick={handleTranslate}
                className="bg-[#6a3de8] text-white px-8 py-3 rounded-full block mx-auto"
              >
                Translate
              </button>
            </div>
          ) : (
            <div 
              className={`border-2 border-dashed rounded-lg p-10 flex flex-col items-center justify-center ${isDragging ? 'border-[#6a3de8] bg-[#6a3de8]/10' : 'border-gray-300'}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="h-20 w-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              
              <p className="text-lg mb-1">Choose an audio file or drag & drop it here</p>
              <p className="text-gray-500 mb-4">MP3, WAV, WMA, AAC, AIFF</p>
              
              <label className="bg-white border border-gray-300 rounded-full px-6 py-2 cursor-pointer hover:bg-gray-50">
                Browse File
                <input type="file" accept="audio/*" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioUpload;