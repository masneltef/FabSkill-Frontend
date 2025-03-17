// src/pages/Settings.tsx
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';

const Settings = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');
  
  // Profile state
  const [profile, setProfile] = useState({
    fullName: 'Yann Vladimir',
    email: 'yvladimir@andrew.cmu.edu',
    organization: 'Carnegie Mellon University',
    language: 'English'
  });

  // Handle profile input changes
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <Header title="Settings" />
        
        <div className="p-6">
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b flex">
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'profile' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'preferences' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('preferences')}
              >
                Preferences
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'security' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('security')}
              >
                Security
              </button>
              <button 
                className={`px-6 py-3 font-medium text-sm ${activeTab === 'team' ? 'text-[#6a3de8] border-b-2 border-[#6a3de8]' : 'text-gray-500'}`}
                onClick={() => setActiveTab('team')}
              >
                Team
              </button>
            </div>
            
            <div className="p-6">
              {/* Profile Settings */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">User Profile</h2>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                    <div className="flex items-center">
                      <div className="h-16 w-16 rounded-full bg-blue-400 flex items-center justify-center text-white mr-4 text-xl">
                        {profile.fullName.charAt(0)}
                      </div>
                      <button className="bg-white border border-gray-300 rounded px-4 py-2 text-sm hover:bg-gray-50">
                        Upload
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        value={profile.fullName}
                        onChange={handleProfileChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleProfileChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                      <input
                        type="text"
                        name="organization"
                        value={profile.organization}
                        onChange={handleProfileChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Language</label>
                      <select 
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        name="language"
                        value={profile.language}
                        onChange={handleProfileChange}
                      >
                        <option value="English">English</option>
                        <option value="French">French</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Kinyarwanda">Kinyarwanda</option>
                        <option value="Swahili">Swahili</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-[#6a3de8] text-white px-4 py-2 rounded hover:bg-[#5932ca]">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Preferences Tab */}
              {activeTab === 'preferences' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">App Preferences</h2>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center py-3 border-b">
                      <div>
                        <p className="font-medium">Dark Mode</p>
                        <p className="text-sm text-gray-500">Use a dark color scheme</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6a3de8]"></div>
                      </label>
                    </div>
                    
                    <div className="flex justify-between items-center py-3 border-b">
                      <div>
                        <p className="font-medium">Enable Notifications</p>
                        <p className="text-sm text-gray-500">Get updates and alerts</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#6a3de8]"></div>
                      </label>
                    </div>
                    
                    <div className="py-3 border-b">
                      <p className="font-medium mb-2">Default Interview Language</p>
                      <select className="w-full md:w-1/3 border border-gray-300 rounded px-3 py-2">
                        <option value="english">English</option>
                        <option value="french">French</option>
                        <option value="spanish">Spanish</option>
                        <option value="kinyarwanda">Kinyarwanda</option>
                        <option value="swahili">Swahili</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="bg-[#6a3de8] text-white px-4 py-2 rounded hover:bg-[#5932ca]">
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
              
              {/* Security Tab */}
              {activeTab === 'security' && (
                <div>
                  <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Change Password</h3>
                    
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input
                          type="password"
                          className="w-full border border-gray-300 rounded px-3 py-2"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input
                          type="password"
                          className="w-full border border-gray-300 rounded px-3 py-2"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input
                          type="password"
                          className="w-full border border-gray-300 rounded px-3 py-2"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    
                    <button className="bg-[#6a3de8] text-white px-4 py-2 rounded hover:bg-[#5932ca]">
                      Update Password
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                    
                    <div className="flex justify-between items-center py-3 border-b">
                      <div>
                        <p className="font-medium">Enable 2FA</p>
                        <p className="text-sm text-gray-500">Add extra security</p>
                      </div>
                      <button className="bg-[#6a3de8] text-white px-4 py-2 rounded hover:bg-[#5932ca]">
                        Set Up
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Team Management */}
              {activeTab === 'team' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Team Members</h2>
                    <button className="bg-[#6a3de8] text-white px-4 py-2 rounded hover:bg-[#5932ca]">
                      <span className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Invite Member
                      </span>
                    </button>
                  </div>
                  
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-white mr-3">
                                Y
                              </div>
                              <div>
                                <div className="font-medium">Yann Vladimir</div>
                                <div className="text-sm text-gray-500">yvladimir@andrew.cmu.edu</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                              Admin
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-[#6a3de8] hover:text-[#5932ca]">Edit</button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center text-white mr-3">
                                M
                              </div>
                              <div>
                                <div className="font-medium">Marie Dupont</div>
                                <div className="text-sm text-gray-500">mdupont@andrew.cmu.edu</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                              Manager
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-[#6a3de8] hover:text-[#5932ca]">Edit</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;