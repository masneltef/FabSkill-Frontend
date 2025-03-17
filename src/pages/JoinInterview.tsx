// src/pages/JoinInterview.tsx
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';

const JoinInterview = () => {
  const [interviewCode, setInterviewCode] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<string>('zoom');
  
  // List of upcoming interviews
  const upcomingInterviews = [
    { 
      id: 1, 
      candidate: 'Sarah Johnson', 
      position: 'Software Engineer',
      date: 'Today, 2:00 PM', 
      platform: 'Zoom',
      status: 'Ready'
    },
    { 
      id: 2, 
      candidate: 'Daniel Mutesa', 
      position: 'UX Designer',
      date: 'Tomorrow, 10:30 AM', 
      platform: 'Google Meet',
      status: 'Scheduled'
    },
    { 
      id: 3, 
      candidate: 'Maria Garcia', 
      position: 'Product Manager',
      date: 'Mar 19, 3:15 PM', 
      platform: 'Microsoft Teams',
      status: 'Scheduled'
    }
  ];
  
  // Connection methods
  const connectionMethods = [
    {
      id: 'zoom',
      name: 'Zoom',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 12V9L14 12L8 15V12Z" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'meet',
      name: 'Google Meet',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 9V15M17 9H11V15H17V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10V14M16 10V14M12 6V18M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'webex',
      name: 'Cisco Webex',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const handleJoin = () => {
    if (interviewCode.trim() === '') {
      alert('Please enter a valid interview code');
      return;
    }
    
    // Here you would implement the logic to join the interview
    alert(`Joining interview with code ${interviewCode} via ${selectedMethod}`);
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <Header title="Join Interview" />
        
        <div className="p-6">
          {/* Join by code section */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Join an Interview</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Interview Code</label>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 border border-gray-300 rounded-l-md px-3 py-2"
                    placeholder="e.g. ABC-123-XYZ"
                    value={interviewCode}
                    onChange={(e) => setInterviewCode(e.target.value)}
                  />
                  <button 
                    className="bg-[#6a3de8] text-white px-4 py-2 rounded-r-md hover:bg-[#5932ca]"
                    onClick={handleJoin}
                  >
                    Join
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-1">Enter the code provided by the interviewer</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Connection Method</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {connectionMethods.map((method) => (
                    <div 
                      key={method.id}
                      className={`border rounded-md p-3 cursor-pointer ${
                        selectedMethod === method.id 
                          ? 'border-[#6a3de8] bg-[#6a3de8]/5' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedMethod(method.id)}
                    >
                      <div className="flex flex-col items-center">
                        <div className={`mb-2 ${selectedMethod === method.id ? 'text-[#6a3de8]' : 'text-gray-500'}`}>
                          {method.icon}
                        </div>
                        <span className={`text-sm ${selectedMethod === method.id ? 'font-medium text-[#6a3de8]' : ''}`}>{method.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Upcoming interviews section */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Your Upcoming Interviews</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {upcomingInterviews.map((interview) => (
                      <tr key={interview.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{interview.candidate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {interview.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {interview.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {interview.platform}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            interview.status === 'Ready' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {interview.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {interview.status === 'Ready' ? (
                            <button className="bg-[#6a3de8] text-white px-3 py-1 rounded hover:bg-[#5932ca]">
                              Join Now
                            </button>
                          ) : (
                            <button className="text-[#6a3de8] hover:text-[#5932ca]">
                              View Details
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinInterview;