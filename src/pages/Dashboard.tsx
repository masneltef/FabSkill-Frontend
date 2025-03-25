import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';

const Overview = () => {
  const [activeTab, setActiveTab] = useState<string>('recent');
  
  const stats = [
    { title: 'Total Interviews', value: '124', change: '+12%', icon: '📊' },
    { title: 'Processed Videos', value: '87', change: '+8%', icon: '🎬' },
    { title: 'Hours Saved', value: '342', change: '+18%', icon: '⏱️' },
    { title: 'Candidates', value: '56', change: '+5%', icon: '👥' }
  ];
  
  const recentInterviews = [
    { id: 1, name: 'John Doe', date: '2025-03-15', duration: '32:15', language: 'Kinyarwanda', status: 'Completed' },
    { id: 2, name: 'Jane Smith', date: '2025-03-14', duration: '45:30', language: 'Kinyarwanda', status: 'Processing' },
    { id: 3, name: 'Alex Johnson', date: '2025-03-13', duration: '28:45', language: 'Kinyarwanda', status: 'Completed' },
    { id: 4, name: 'Emily Wilson', date: '2025-03-10', duration: '38:20', language: 'Kinyarwanda', status: 'Completed' }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <Header title="Overview" />
        
        <div className="p-6">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                    <span className="text-green-500 text-sm font-medium">{stat.change} from last month</span>
                  </div>
                  <div className="text-3xl">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-8">
            <div className="border-b flex">
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'recent' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('recent')}
              >
                Recent Interviews
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'upcoming' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming Interviews
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'drafts' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('drafts')}
              >
                Drafts
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'recent' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Language</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentInterviews.map((interview) => (
                        <tr key={interview.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{interview.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{interview.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{interview.duration}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{interview.language}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              interview.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {interview.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-[#6a3de8] hover:text-[#5932ca] mr-3">View</button>
                            <button className="text-gray-600 hover:text-gray-900">Download</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {activeTab === 'upcoming' && (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No upcoming interviews</h3>
                  <p className="text-gray-500">Schedule new interviews using the "New Interview" button</p>
                </div>
              )}
              
              {activeTab === 'drafts' && (
                <div className="text-center py-12">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No draft interviews</h3>
                  <p className="text-gray-500">Any saved drafts will appear here</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">Recent Activities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">New interview created</p>
                    <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Interview processed successfully</p>
                    <p className="text-xs text-gray-500">Today, 9:15 AM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Video uploaded</p>
                    <p className="text-xs text-gray-500">Yesterday, 4:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">System Performance</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Translation Accuracy</span>
                    <span className="text-sm font-medium">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Processing Speed</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">System Uptime</span>
                    <span className="text-sm font-medium">99.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '99.8%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;