import React from 'react';
import { FaUserFriends, FaStar, FaRegStar, } from 'react-icons/fa';

// type TabType = 'info' | 'player' | 'comments';

interface PlayerTabProps {
    // onTabChange: (tab: TabType) => void;
    // onTabChange: (tab: string) => void;
    onTabChange: (tab: 'info' | 'player' | 'comments') => void;
    onJoinClick: () => void;
}

// const PlayerTab = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
const PlayerTab: React.FC<PlayerTabProps> = ({ onTabChange, onJoinClick }) => {
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
                        className="px-4 py-2 font-medium text-gray-500"
                        onClick={() => onTabChange('info')}
                    >
                        Info
                    </button>
                    <button
                        className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600"
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

            {/* Players List */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-3">Players</h2>

                {/* Host */}
                <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                        <div>
                            <p className="font-medium">AM Alex Mercer (Host)</p>
                            <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                    i < 4 ? <FaStar key={i} className="text-yellow-400" size={14} /> : <FaRegStar key={i} className="text-yellow-400" size={14} />
                                ))}
                                <span className="text-gray-500 text-sm ml-1">4.6</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-blue-500 text-sm font-medium">Message</button>
                </div>

                {/* Other Players */}
                {[
                    { initials: "JU", name: "Jamir Uddin", rating: 4.8 },
                    { initials: "BA", name: "Biplu Ahmed", rating: 4.5 },
                    { initials: "TB", name: "Topu Barman", rating: 4.2 },
                    { initials: "RH", name: "Rakib Hossain", rating: 4.3 }
                ].map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex-shrink-0 flex items-center justify-center text-blue-800 font-medium">
                                {player.initials}
                            </div>
                            <div>
                                <p className="font-medium">{player.name}</p>
                                <div className="flex items-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        i < Math.floor(player.rating) ? <FaStar key={i} className="text-yellow-400" size={14} /> : <FaRegStar key={i} className="text-yellow-400" size={14} />
                                    ))}
                                    <span className="text-gray-500 text-sm ml-1">{player.rating}</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-blue-500 text-sm font-medium">Message</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerTab;