// src/pages/Interviews.tsx
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';

const Interviews = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isLinkInput, setIsLinkInput] = useState<boolean>(false);
  const [isUploaded, setIsUploaded] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isTranslated, setIsTranslated] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const objectUrl = URL.createObjectURL(file);
      setVideoUrl(objectUrl);
      simulateProcessing();
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const objectUrl = URL.createObjectURL(file);
      setVideoUrl(objectUrl);
      simulateProcessing();
    }
  };

  const handleLinkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (videoUrl) {
      simulateProcessing();
    }
  };

  const simulateProcessing = () => {
    setIsUploaded(true);
    setIsProcessing(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsProcessing(false);
      setIsTranslated(true);
    }, 3000);
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const toggleInputMethod = () => {
    setIsLinkInput(!isLinkInput);
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto">
        <Header title="Interview" />
        
        <div className="p-4">
          {!isUploaded ? (
            <div className="mb-6">
              <div className="flex justify-end mb-4">
                <button 
                  onClick={toggleInputMethod} 
                  className="text-[#6a3de8] font-medium flex items-center"
                >
                  {isLinkInput ? 'Upload Video File' : 'Enter Video URL'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              {isLinkInput ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Add Video URL</h2>
                  <form onSubmit={handleLinkSubmit}>
                    <div className="mb-4">
                      <input 
                        type="text" 
                        placeholder="Enter YouTube, Vimeo or other video URL" 
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6a3de8]"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        required
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="bg-[#6a3de8] text-white px-6 py-3 rounded-lg hover:bg-[#5932ca] transition duration-200"
                    >
                      Process Video
                    </button>
                  </form>
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div className="h-16 w-16 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  
                  <p className="text-lg mb-1">Choose a video file or drag & drop it here</p>
                  <p className="text-gray-500 mb-4">MP4, MOV, WEBM, AVI, FLV</p>
                  
                  <button 
                    onClick={handleBrowseClick}
                    className="bg-white border border-gray-300 rounded-full px-6 py-2 cursor-pointer hover:bg-gray-50"
                  >
                    Browse File
                  </button>
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept="video/*" 
                    className="hidden" 
                    onChange={handleFileChange} 
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              {isProcessing ? (
                <div className="flex flex-col items-center py-16">
                  <div className="w-20 h-20 border-4 border-[#6a3de8] border-t-transparent rounded-full animate-spin mb-6"></div>
                  <p className="text-lg font-medium">Processing Video and Creating Captions...</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-end mb-4">
                    <button className="bg-[#6a3de8] text-white px-4 py-2 rounded-lg flex items-center">
                      <span>Select Language</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                
                  <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
                    <div className="relative aspect-video">
                      <video 
                        ref={videoRef}
                        src={videoUrl} 
                        controls 
                        className="w-full h-full"
                      ></video>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                        <p className="text-lg">
                          The video caption s can be here, lorem ipsum dolar sit amet, s can be here, lorem ipsum dolar hs djks sit ampt,
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-6">
                    <button className="bg-[#6a3de8] text-white px-6 py-3 rounded-full hover:bg-[#5932ca] transition duration-200 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Subtitles
                    </button>
                    
                    <button className="bg-[#6a3de8] text-white px-6 py-3 rounded-full hover:bg-[#5932ca] transition duration-200 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download Video
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interviews;