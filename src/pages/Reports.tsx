// src/pages/Reports.tsx
import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';

const Reports = () => {
  const [reportType, setReportType] = useState<string>('weekly');
  const [dateRange, setDateRange] = useState<string>('last30');
  
  return (
    <div className="flex h-screen">
      <Sidebar 
        userName="Yann Vladimir" 
        userEmail="yvladimir@andrew.cmu.edu" 
      />
      
      <div className="flex-1 overflow-auto bg-gray-50">
        <Header title="Reports" />
        
        <div className="p-6">
          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-wrap gap-4">
            <div>
              <label htmlFor="reportType" className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select 
                id="reportType" 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#6a3de8]"
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="weekly">Weekly Report</option>
                <option value="monthly">Monthly Report</option>
                <option value="quarterly">Quarterly Report</option>
                <option value="annual">Annual Report</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="dateRange" className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select 
                id="dateRange" 
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#6a3de8]"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="last7">Last 7 days</option>
                <option value="last30">Last 30 days</option>
                <option value="last90">Last 90 days</option>
                <option value="custom">Custom range</option>
              </select>
            </div>
            
            <div className="ml-auto self-end">
              <button className="bg-[#6a3de8] text-white px-4 py-2 rounded-md hover:bg-[#5932ca] transition duration-200">
                Generate Report
              </button>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">Total Interviews</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">87</span>
                <span className="text-green-500 ml-2 text-sm">↑ 12%</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Compared to previous period</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">Average Duration</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">38.5</span>
                <span className="text-sm ml-1">minutes</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Per interview</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-2">Translation Accuracy</h3>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">96.8%</span>
                <span className="text-green-500 ml-2 text-sm">↑ 1.2%</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Based on quality assessments</p>
            </div>
          </div>
          
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Interview Metrics Over Time</h3>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-sm border rounded-md bg-[#6a3de8] text-white">Interviews</button>
                <button className="px-3 py-1 text-sm border rounded-md text-gray-700">Duration</button>
                <button className="px-3 py-1 text-sm border rounded-md text-gray-700">Accuracy</button>
              </div>
            </div>
            
            {/* Placeholder for Chart */}
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart visualization would appear here</p>
            </div>
          </div>
          
          {/* Language Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">Language Distribution</h3>
              
              {/* Placeholder for Chart */}
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <p className="text-gray-500">Pie chart would appear here</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm">Kinyarwanda</span>
                  </div>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm">Swahili</span>
                  </div>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-sm">French</span>
                  </div>
                  <span className="text-sm font-medium">6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                    <span className="text-sm">Other</span>
                  </div>
                  <span className="text-sm font-medium">4%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-medium mb-4">System Performance</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Processing Time</span>
                    <span className="text-sm font-medium">Avg: 4m 12s</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#6a3de8] h-2 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Word Error Rate</span>
                    <span className="text-sm font-medium">3.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '96.8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Server Load</span>
                    <span className="text-sm font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
              
              <h4 className="text-md font-medium mt-6 mb-3">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Average Processing</p>
                  <p className="text-lg font-semibold">4.2 min</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Success Rate</p>
                  <p className="text-lg font-semibold">99.2%</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Total Duration</p>
                  <p className="text-lg font-semibold">3,354 min</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-500">Data Processed</p>
                  <p className="text-lg font-semibold">248 GB</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Export Options */}
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export as PDF
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export as CSV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;