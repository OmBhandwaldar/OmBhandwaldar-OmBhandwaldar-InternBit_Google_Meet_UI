import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import image1 from '../assets/image_1.jpg';
import image2 from '../assets/image_2.jpg';
import image3 from '../assets/image_3.jpg';
import image4 from '../assets/image_4.jpg';
import image5 from '../assets/image_5.jpg';
import image6 from '../assets/image_6.jpg';

const MeetingRoom = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const meetingCode = parseInt(searchParams.get('code') || '0');
  // const participantsCount = parseInt(searchParams.get('participants') || '4');

  useEffect(() => {
    console.log('Meeting Code:', meetingCode);
  }, [meetingCode]);

  const handleEndCall = () => {
    navigate('/');
  };

  // Array of available participant images
  const participantImages = [image1, image2, image3, image4, image5, image6];

  // Generate array of participants based on count
  const participants = Array.from({ length: meetingCode }, (_, index) => ({
    name: `Participant ${index + 1}`,
    image: participantImages[index % participantImages.length] // Cycle through available images
  }));

  return (
    <div className="h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-2 sm:px-4 py-2 bg-gray-700 h-14 rounded-lg mt-2 sm:mt-4 mx-1 sm:mx-2">
        <div className="flex items-center gap-2">
          <span className="text-base sm:text-xl truncate">{participants[0].name} is presenting</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-128px)]">
        {/* Main video area */}
        <div className="flex-1 p-2 sm:p-4">
          <div className="relative h-full rounded-lg overflow-hidden">
            <img 
              src={participants[0].image} 
              alt={participants[0].name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-2  px-2 py-1 rounded">
              <span className="text-sm font-medium">{participants[0].name}</span>
            </div>
          </div>
        </div>

        {/* Participants sidebar */}
        <div className="w-full lg:w-96 p-2 sm:p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-2 sm:gap-4">
            {participants.slice(1).map((participant, index) => (
              <div key={participant.name} className="flex flex-col bg-gray-700 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={participant.image} 
                    alt={participant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-1 rounded">
                    <span className="text-xs sm:text-sm font-medium truncate max-w-[120px]">{participant.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-between px-2 sm:px-4 bg-gray-800">
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2 sm:p-3 rounded-full hover:bg-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </button>
          <button className="p-2 sm:p-3 rounded-full hover:bg-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
          <button className="hidden sm:block p-2 sm:p-3 rounded-full hover:bg-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </button>
          <button className="hidden sm:block p-2 sm:p-3 rounded-full hover:bg-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <button 
          onClick={handleEndCall}
          className="bg-red-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-red-700 text-sm sm:text-base"
        >
          End call
        </button>

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="hidden sm:block p-2 sm:p-3 rounded-full hover:bg-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-2 sm:p-3 rounded-full hover:bg-gray-700">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom; 