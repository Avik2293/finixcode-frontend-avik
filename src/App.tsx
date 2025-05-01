
import React, { useState } from 'react';
import Header from './components/Header';
import PlayerTab from './components/PlayerTab';
import InfoTab from './components/InfoTab';
import CommentsTab from './components/CommentsTab';
import JoinEventPopup from './components/JoinEventPopup';

type TabType = 'info' | 'player' | 'comments';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('info');
  const [showJoinPopup, setShowJoinPopup] = useState(false);

  const handleJoinClick = () => {
    setShowJoinPopup(true);
  };

  return (
    <div className="font-sans bg-[#E5E5E5] min-h-screen">
      <Header />

      <div className="max-w-[1360px] mx-auto pb-10">
        {/* Photo Gallery */}
        <div className="px-4 pt-4">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-gray-200 rounded-lg overflow-hidden max-h-[360px]">
              <img
                src="../src/assets/Background.png"
                alt="Event photo 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-1 flex flex-col gap-3 max-h-[360px]">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="../src/assets/Background.png"
                  alt="Event photo 2"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gray-200 rounded-lg overflow-hidden relative">
                <img
                  src="../src/assets/Background.png"
                  alt="Event photo 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">+2 photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row gap-4 px-4 mt-4">
          {/* Left Column (Main Content) */}
          <div className="flex-1 rounded-lg shadow-sm">

            {/* Event Header */}
            <div className="p-4 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">Road to the Football Finals</h1>
                  <p className="text-gray-600 mb-1">Bashundhara Sports Complex</p>
                  <p className="text-gray-600">Mar 14 from 7:30 PM – 9:30 PM</p>
                </div>

                <span className="px-2 py-1">
                  <div className='flex items-center gap-2'>
                    <button className=" text-[#34735F] font-medium rounded-full">
                      <img src={"../src/assets/Frame 1984078421.png"} alt="Logo" className="h-8 w-auto" />
                    </button>

                    <button className=" text-[#34735F] font-medium rounded-full ">
                      <img src={"../src/assets/Frame 1984078421 (1).png"} alt="Logo" className="h-8 w-auto" />
                    </button>

                    <button className=" text-[#34735F] font-medium rounded-full ">
                      <img src={"../src/assets/dots-vertical.png"} alt="Logo" className="h-6 w-auto" />
                    </button>
                  </div>
                </span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-3 font-medium ${activeTab === 'info' ? 'text-[#DA6049] border-b-2 border-[#DA6049]' : 'text-gray-500'}`}
              >
                Info
              </button>

              <button
                onClick={() => setActiveTab('player')}
                className={`flex-1 py-3 font-medium ${activeTab === 'player' ? 'text-[#DA6049] border-b-2 border-[#DA6049]' : 'text-gray-500'}`}
              >
                Player
              </button>

              <button
                onClick={() => setActiveTab('comments')}
                className={`flex-1 py-3 font-medium ${activeTab === 'comments' ? 'text-[#DA6049] border-b-2 border-[#DA6049]' : 'text-gray-500'}`}
              >
                Comments
              </button>
            </div>

            <hr className='border-t border-gray-300' />

            {/* Tab Content */}
            <div className="p-4">
              {/* {activeTab === 'info' && <InfoTab onTabChange={setActiveTab} onJoinClick={handleJoinClick} />} */}
              {activeTab === 'info' && <InfoTab />}
              {activeTab === 'player' && <PlayerTab />}
              {activeTab === 'comments' && <CommentsTab />}
            </div>
          </div>

          {/* Right Column (Join Section) */}
          <div className="w-full md:w-80 bg-white rounded-lg shadow-sm h-fit sticky top-4">
            <div className="p-4">
              <div className="flex flex-col items-center mb-4 gap-6">
                <div className="flex justify-between items-center border border-[#E5E5E5] rounded-2xl w-full p-4">
                  <p className="font-medium text-[#DA6049]">6 spots left</p>
                  <p className="text-[#171717] text-sm">
                    320tk /player
                    <span className='text-[#808080]'>(both)</span>
                  </p>
                </div>

                <button
                  onClick={handleJoinClick}
                  className="bg-[#63CFA0] hover:bg-[#52b58c] px-6 py-2 rounded-full font-medium transition-colors w-full"
                >
                  Join event
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events (only shown on Info tab) */}
        {activeTab === 'info' && (
          <div className="mt-4 px-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-xl font-semibold mb-4">Other events you may like</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Legends Rise on the Field",
                    time: "Mon 5 + 12:30AM - 12:30PM",
                    location: "Birmingham Sports Complex",
                    spots: "3 spots left",
                    price: "320 (person)",
                  },
                  {
                    title: "Chasing Glory: Football Showdown",
                    time: "Mon 5 + 13:30AM - 13:30PM",
                    location: "Birmingham Sports Complex",
                    spots: "4 spots left",
                    price: "320 (person)",
                  },
                  {
                    title: "United We Play, United Win",
                    time: "Don 5 + 13:30AM - 13:30PM",
                    location: "Birmingham Sports Complex",
                    spots: "5 spots left",
                    price: "320 (person)",
                  },
                ].map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">Football</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">Relay</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">Female</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">Age: Below 25</span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded-full text-xs">Beginner</span>
                    </div>
                    <h3 className="font-medium mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-1">{event.time}</p>
                    <p className="text-gray-600 text-sm mb-2">{event.location}</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700">{event.spots}</span>
                      <span className="text-gray-700">{event.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {showJoinPopup && <JoinEventPopup onClose={() => setShowJoinPopup(false)} />}
    </div>
  );
};

export default App;