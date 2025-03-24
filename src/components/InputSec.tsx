import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface InputSecProps {
  onStartMeeting: (code: string) => void;
}

const InputSec: React.FC<InputSecProps> = ({ onStartMeeting }) => {
  const [meetingCode, setMeetingCode] = useState('');
  const navigate = useNavigate();

  const handleJoinMeeting = () => {
    if (meetingCode.trim()) {
      navigate(`/meeting?code=${encodeURIComponent(meetingCode.trim())}`);
    }
  };

  const handleStartMeeting = () => {
    if (meetingCode.trim()) {
      onStartMeeting(meetingCode.trim());
    } else {
      // If no code is entered, ask user to enter one
      alert('Please enter a meeting code to start the meeting');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && meetingCode.trim()) {
      handleJoinMeeting();
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-24 py-8 ml-16 sm:py-12 lg:py-16">
      <h1 className="text-[45px] leading-tight font-normal text-gray-900 mb-6">
        Video calls and meetings <br />for everyone
      </h1>
      <p className="text-xl text-gray-600 mb-12">
        Connect, collaborate, and celebrate from <br /> anywhere with Google Meet
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        {/* New meeting button */}
        <button 
          onClick={handleStartMeeting}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 font-medium"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
            />
          </svg>
          Start meeting
        </button>

        {/* Meeting code input */}
        <div className="flex-1 min-w-[200px] relative">
          <div className="flex items-center border rounded-md hover:shadow-md focus-within:shadow-md">
            <div className="pl-4 py-3">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                />
              </svg>
            </div>
            <input
              type="text"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter the number of participants between 1 and 8"
              className="flex-1 px-4 py-3 outline-none bg-transparent"
            />
            {/* <button 
              onClick={handleJoinMeeting}
              className={`px-6 py-3 font-medium ${
                meetingCode.trim() 
                  ? 'text-blue-600 hover:bg-blue-50 cursor-pointer' 
                  : 'text-gray-400 cursor-default'
              }`}
            >
              Join
            </button> */}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 text-[15px]">
        <a href="#" className="text-blue-600 hover:underline">Learn more</a>
        <span className="text-gray-600">about Google Meet</span>
      </div>
    </div>
  );
};

export default InputSec; 