import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  userName?: string;
  userEmail?: string;
  userImage?: string;
}

const Sidebar: FC<SidebarProps> = ({ 
  userName = "System Admin", 
  userEmail = "",
  userImage = ""
}) => {
  const location = useLocation();
  
  // Check if a route is active
  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="w-52 bg-[#6a3de8] min-h-screen flex flex-col text-white">
      {/* Logo Section */}
      <div className="p-4 mb-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-5xl font-bold leading-none">f</div>
          <div className="text-xl">
            <span className="font-normal">fab</span>
            <span className="font-bold">skill</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex-grow">
        <Link 
          to="/overview" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/overview') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          Overview
        </Link>

        <Link 
          to="/reports" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/reports') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          Reports
        </Link>

        <Link 
          to="/candidates" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/candidates') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Candidates
        </Link>

        <Link 
          to="/interviews" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/interviews') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Interviews
        </Link>

        <Link 
          to="/join-interview" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/join-interview') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Join an Interview
        </Link>
        
        <Link 
          to="/audio-upload" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/audio') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          Audio Upload
        </Link>
      </div>

      {/* General Section */}
      <div className="mb-4">
        <div className="px-6 py-2 text-xs uppercase opacity-75">GENERAL</div>
        
        <Link 
          to="/settings" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/settings') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Settings
        </Link>
        
        <Link 
          to="/help" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/help') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Help
        </Link>
      </div>

      {/* User Profile Section - Modified for vertical stacking */}
      <div className="mt-auto border-t border-[#5932ca] p-4">
        <div className="flex flex-col items-center">
          {userImage ? (
            <img 
              src={userImage} 
              alt={userName} 
              className="h-16 w-16 rounded-full mb-2 object-cover"
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-blue-400 flex items-center justify-center text-white mb-2">
              {userName.charAt(0)}
            </div>
          )}
          <div className="text-center">
            <div className="font-medium text-sm">{userName}</div>
            {userEmail && <div className="text-xs opacity-75">{userEmail}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;