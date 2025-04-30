import React from 'react';
import {
    FaMapMarkerAlt,
    FaClock,
    FaCalendarAlt,
    FaChevronRight,
    FaUserFriends,
} from 'react-icons/fa';

// type TabType = 'info' | 'player' | 'comments';

interface InfoTabProps {
    // onTabChange: (tab: TabType) => void;
    // onTabChange: (tab: string) => void;
    onTabChange: (tab: 'info' | 'player' | 'comments') => void;
    onJoinClick: () => void;
}

// const InfoTab = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
const InfoTab: React.FC<InfoTabProps> = ({ onTabChange, onJoinClick }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Event Title and Basic Info */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Read to the Football Finals</h1>
                <p className="text-gray-600 mb-1">Beahundhara Sports Complex</p>
                <p className="text-gray-600 mb-4">Mar 14 from 7:30 PM – 9:30 PM</p>

                {/* Photo Gallery */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-semibold flex items-center">
                            <FaUserFriends className="mr-2" /> +2 photos
                        </h2>
                        <button className="text-blue-500 text-sm">See all</button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                            {/* Placeholder for photo 1 */}
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                            {/* Placeholder for photo 2 */}
                        </div>
                        <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center bg-blue-50">
                            <span className="text-blue-500">+3</span>
                        </div>
                    </div>
                </div>

                {/* Spots and Price */}
                <div className="flex justify-between items-center mb-6 p-4 bg-blue-50 rounded-lg">
                    <div>
                        <p className="font-medium">6 spots left</p>
                        <p className="text-gray-600 text-sm">320tk /player (both)</p>
                    </div>
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium"
                        onClick={onJoinClick}
                    >
                        Join event
                    </button>
                </div>

                {/* Tab Navigation */}
                {/* <div className="flex border-b">
                                <button className="px-4 py-2 font-medium text-gray-500">Info</button>
                                <button className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600">Player</button>
                                <button className="px-4 py-2 font-medium text-gray-500">Comments</button>
                            </div> */}
                <div className="flex border-b">
                    <button
                        className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600"
                        onClick={() => onTabChange('info')}
                    >
                        Info
                    </button>
                    <button
                        className="px-4 py-2 font-medium text-gray-500"
                        onClick={() => onTabChange('player')}
                    >
                        Player
                    </button>
                    <button
                        className="px-4 py-2 font-medium text-gray-500"
                        onClick={() => onTabChange('comments')}
                    >
                        Comments
                    </button>
                </div>
            </div>

            {/* Rest of Info Tab content... */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">About this event</h2>
                <p className="text-gray-700 mb-4">
                    Learn about the website first between July 03 years from the listing (leaver project, mafia year area)
                    mainstream greeting centre; fill with urban agriculture experts, leading joining farms the fragrance of gas
                    late-fin nature and both of renowned high-tech buildings.
                </p>
                <p className="text-red-600 font-medium">Red tree</p>
            </div>

            {/* Location Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 flex items-center">
                    <FaMapMarkerAlt className="text-red-500 mr-2" />
                    Location
                </h2>
                <p className="font-medium mb-1">NIDE Field</p>
                <p className="text-gray-600 mb-4">Juan Baptista Pointe de Beloja Lada Shore Drive, Chicago, Illinois</p>
                <button className="text-blue-500 font-medium flex items-center">
                    Open maps <FaChevronRight className="ml-1" size={12} />
                </button>
            </div>

            {/* Event Highlights */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Highlights</h2>
                <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                        <FaCalendarAlt className="mr-2 text-gray-500" /> Mon, 2 Dec
                    </li>
                    <li className="flex items-center text-gray-700">
                        <FaClock className="mr-2 text-gray-500" /> 7:30 AM - 8:30 AM
                    </li>
                    <li className="text-gray-700">Arrive 15 min before start</li>
                    <li className="text-gray-700">Venus booked</li>
                </ul>
            </div>

            {/* Refund Policy */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Refund & cancellation policy</h2>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Full refund if heat cancels the game</li>
                    <li>Full refund if you cancel 24+ hours in advance</li>
                    <li>Full refund if game is cancelled due to low attendance</li>
                </ul>
                <button className="text-blue-500 font-medium mt-2">Learn more</button>
            </div>

            {/* Host Information */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">Hosted by</h2>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                        <p className="font-medium">Alex Mercer</p>
                        <p className="text-gray-600 text-sm">23 activities hosted • 4.6 hour rating</p>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium">Message</button>
                    <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium">View profile</button>
                </div>
            </div>
        </div>
    );
};

export default InfoTab;