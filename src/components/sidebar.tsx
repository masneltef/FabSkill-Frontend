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
    return location.pathname === path;
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
          to="/audio-upload" 
          className={`flex items-center px-6 py-3 text-sm ${isActive('/audio-upload') ? 'bg-[#5932ca] border-l-4 border-white' : 'hover:bg-[#5932ca]'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
          Audio Upload
        </Link>
        
        {/* Add other menu items here */}
      </div>

      {/* General Section */}
      <div className="mb-4">
        <div className="px-6 py-2 text-xs uppercase opacity-75">General</div>
        
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

      {/* User Profile Section - Updated with image */}
      <div className="mt-auto p-4 border-t border-[#5932ca]">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="h-16 w-16 rounded-full overflow-hidden mb-2 border-2 border-white">
            {userImage ? (
              <img 
                src={userImage} 
                alt={userName} 
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-blue-400 flex items-center justify-center text-white text-xl">
                {userName.charAt(0)}
              </div>
            )}
          </div>
          
          {/* User Info */}
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