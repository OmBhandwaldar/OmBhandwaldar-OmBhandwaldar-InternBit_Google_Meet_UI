import { useNavigate } from 'react-router-dom';
import InputSec from './InputSec';
import Illustrator from './Illustrator';

const MainComponent = () => {
  const navigate = useNavigate();

  const handleStartMeeting = (code: string) => {
    navigate(`/meeting?code=${encodeURIComponent(code)}`);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <InputSec onStartMeeting={handleStartMeeting} />
      </div>
      <div className="flex-1 mt-8 lg:mt-0">
        <Illustrator />
      </div>
    </div>
  );
};

export default MainComponent;