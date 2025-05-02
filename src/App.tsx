import React, { useState } from 'react';
import Header from './components/Header';
import PlayerTab from './components/PlayerTab';
import InfoTab from './components/InfoTab';
import CommentsTab from './components/CommentsTab';
import JoinEventPopup from './components/JoinEventPopup';
import { events } from './data/events';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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

      <div className="max-w-[1360px] mx-auto px-2 sm:px-4 pb-6 md:pb-10">
        {/* Photo Gallery */}
        <div className="pt-2 sm:pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="sm:col-span-2 bg-gray-200 rounded-lg overflow-hidden aspect-video sm:aspect-auto sm:max-h-[360px]">
              <img
                src="../src/assets/Background.png"
                alt="Main event photo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4 md:gap-6 sm:max-h-[360px]">
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square sm:aspect-auto">
                <img
                  src="../src/assets/Background.png"
                  alt="Event photo 2"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-square sm:aspect-auto relative">
                <img
                  src="../src/assets/Background.png"
                  alt="Event photo 3"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <span className="text-white font-medium text-base sm:text-lg">+2 photos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 mt-3 sm:mt-4">
          {/* Left Column (Main Content) */}
          <div className="flex-1 rounded-lg shadow-sm">

            {/* Event Header */}
            <div className="p-3 sm:p-4 border-b">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">Road to the Football Finals</h1>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">Bashundhara Sports Complex</p>
                  <p className="text-sm sm:text-base text-gray-600">Mar 14 from 7:30 PM – 9:30 PM</p>
                </div>

                <div className='flex items-center gap-1 sm:gap-2'>
                  <button className="text-[#34735F]">
                    <img
                      src="../src/assets/Frame 1984078421.png"
                      alt="Share"
                      className="h-6 sm:h-8 w-auto"
                    />
                  </button>

                  <button className="text-[#34735F]">
                    <img
                      src="../src/assets/Frame 1984078421 (1).png"
                      alt="Save"
                      className="h-6 sm:h-8 w-auto"
                    />
                  </button>

                  <button className="text-[#34735F]">
                    <img
                      src="../src/assets/dots-vertical.png"
                      alt="More options"
                      className="h-5 sm:h-6 w-auto"
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base font-medium ${activeTab === 'info'
                  ? 'text-[#DA6049] border-b-2 border-[#DA6049]'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Info
              </button>

              <button
                onClick={() => setActiveTab('player')}
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base font-medium ${activeTab === 'player'
                  ? 'text-[#DA6049] border-b-2 border-[#DA6049]'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Player
              </button>

              <button
                onClick={() => setActiveTab('comments')}
                className={`flex-1 py-2 sm:py-3 text-sm sm:text-base font-medium ${activeTab === 'comments'
                  ? 'text-[#DA6049] border-b-2 border-[#DA6049]'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
              >
                Comments
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-3 sm:p-4">
              {activeTab === 'info' && <InfoTab />}
              {activeTab === 'player' && <PlayerTab />}
              {activeTab === 'comments' && <CommentsTab />}
            </div>
          </div>

          {/* Right Column (Join Section) - Sticky on desktop */}
          <div className="w-full lg:w-72 xl:w-80 bg-white rounded-lg shadow-sm h-fit lg:sticky lg:top-4">
            <div className="p-3 sm:p-4">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                <div className="flex justify-between items-center border border-[#E5E5E5] rounded-2xl w-full p-3 sm:p-4">
                  <p className="font-medium text-sm sm:text-base text-[#DA6049]">6 spots left</p>
                  <p className="text-[#171717] text-xs sm:text-sm">
                    320tk /player
                    <span className='text-[#808080]'>(both)</span>
                  </p>
                </div>

                <button
                  onClick={handleJoinClick}
                  className="bg-[#63CFA0] hover:bg-[#52b58c] px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-colors w-full"
                >
                  Join event
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Events (only shown on Info tab) */}
        {
          activeTab === 'info' &&
          <div className="mt-3 sm:mt-4">
            <div className="bg-white shadow-sm p-3 sm:p-4 md:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex justify-between items-center gap-2 w-full">
                  <h2 className="text-lg sm:text-xl font-semibold">Other events you may like</h2>

                  <div>
                    <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                      <FaChevronLeft className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                      <FaChevronRight className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {events.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl flex flex-col h-full hover:shadow-md transition-shadow">
                    <img
                      src={`../src/assets/${event.image}`}
                      alt={event.title}
                      className="w-full aspect-video object-cover rounded-t-2xl"
                    />

                    <div className='p-3 sm:p-4 flex flex-col justify-between gap-2 flex-1'>
                      <div className='flex-1'>
                        <div className='flex justify-between items-center w-full mb-1'>
                          <div className="flex gap-1 flex-wrap">
                            {event.tags.map((tag, index) => (
                              <span
                                key={index}
                                className={`${tag === "Football"
                                  ? "bg-[#D9F2E6]"
                                  : tag === "Below 25y"
                                    ? "bg-[#EFEDFF]"
                                    : ""
                                  } px-2 py-0.5 rounded-full text-xs`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <span className='flex items-center gap-0'>
                            <img
                              src="../src/assets/Difficulty Icons (2).png"
                              alt="Difficulty level"
                              className="h-4 sm:h-5 w-auto"
                            />
                            <span className="py-1 text-xs text-[#4A4A4A]">{event.status}</span>
                          </span>
                        </div>

                        <h3 className="font-medium text-[#34735F] mb-1 text-base sm:text-lg">{event.title}</h3>

                        <p className="text-gray-600 text-xs sm:text-sm mb-1">{event.date} • {event.time}</p>

                        <p className="text-gray-600 text-xs sm:text-sm mb-2 flex items-center">
                          <img
                            src="../src/assets/location_on.png"
                            alt="Location"
                            className="h-4 sm:h-5 w-auto mr-1"
                          />
                          {event.location}
                        </p>
                      </div>

                      <div className='mt-auto'>
                        <div className="text-[#AA3333] text-right text-xs sm:text-sm">{event.remainSpots} spots left</div>

                        <div className="flex justify-between items-center text-xs sm:text-sm">
                          <span className="text-gray-700">{event.attend}/{event.totalBooked} attending</span>

                          <span className="text-gray-700 flex items-center">
                            <img
                              src="../src/assets/currency-bangladeshi.png"
                              alt="Price"
                              className="h-4 sm:h-5 w-auto mr-0.5"
                            />
                            {event.price}
                            <span className="text-[#808080] ml-0.5">/person</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        }
      </div>

      {showJoinPopup && <JoinEventPopup onClose={() => setShowJoinPopup(false)} />}
    </div>
  );
};

export default App;