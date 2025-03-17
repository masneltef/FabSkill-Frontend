import { FC } from 'react';

interface ProgressBarProps {
  progress: number;
  status?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress, status }) => {
  return (
    <div className="mb-8 relative w-full max-w-2xl mx-auto">
      <div className="bg-gray-200 rounded-full h-2 mb-1">
        <div 
          className="bg-[#6a3de8] h-2 rounded-full relative" 
          style={{ width: `${progress}%` }}
        >
          <div className="absolute -right-3 -top-1 bg-[#6a3de8] text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
            {progress}
          </div>
        </div>
      </div>
      {status && (
        <div className="text-center text-sm text-gray-600">
          {status}
        </div>
      )}
    </div>
  );
};

export default ProgressBar;