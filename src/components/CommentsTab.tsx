import React, { } from 'react';
import {
    FaUserFriends,
    FaReply
} from 'react-icons/fa';

// type TabType = 'info' | 'player' | 'comments';

interface CommentsTabProps {
    // onTabChange: (tab: TabType) => void;
    // onTabChange: (tab: string) => void;
    onTabChange: (tab: 'info' | 'player' | 'comments') => void;
    onJoinClick: () => void;
}

// const CommentsTab = ({ onTabChange }: { onTabChange: (tab: TabType) => void }) => {
const CommentsTab: React.FC<CommentsTabProps> = ({ onTabChange, onJoinClick }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Event Title and Basic Info */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Road to the Football Finals</h1>
                <p className="text-gray-600 mb-1">Bashundhara Sports Complex</p>
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
                <div className="flex border-b">
                    <button
                        className="px-4 py-2 font-medium text-gray-500"
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
                        className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600"
                        onClick={() => onTabChange('comments')}
                    >
                        Comments
                    </button>
                </div>
            </div>

            {/* Comments Section */}
            <div className="space-y-6">
                {/* Comment 1 */}
                <div className="border-b pb-4">
                    <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div>
                            <p className="font-medium">Alex Mercer</p>
                            <p className="text-gray-700">Looking forward to the game! What's the final player count?</p>
                        </div>
                    </div>
                    <button className="text-blue-500 text-sm font-medium flex items-center ml-13">
                        <FaReply className="mr-1" /> Reply
                    </button>

                    {/* Reply */}
                    <div className="ml-10 mt-3 pl-3 border-l-2 border-gray-200">
                        <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-800 font-medium text-sm">
                                RK
                            </div>
                            <div>
                                <p className="font-medium">Rifat Khan</p>
                                <p className="text-gray-700">missing few players</p>
                                <p className="text-gray-500 text-xs mt-1">14 min</p>
                            </div>
                        </div>

                        {/* Nested Reply */}
                        <div className="ml-8 mt-3 pl-3 border-l-2 border-gray-200">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-800 font-medium text-sm">
                                    RK
                                </div>
                                <div>
                                    <p className="font-medium">Rifat Khan</p>
                                    <p className="text-gray-700">got any friends?</p>
                                    <p className="text-gray-500 text-xs mt-1">14 min</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment 2 */}
                <div className="border-b pb-4">
                    <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                        <div>
                            <p className="font-medium">Alex Mercer</p>
                            <p className="text-gray-700">Looking forward to the game! What's the final player count?</p>
                        </div>
                    </div>
                    <button className="text-blue-500 text-sm font-medium flex items-center ml-13">
                        <FaReply className="mr-1" /> Reply
                    </button>

                    {/* Reply */}
                    <div className="ml-10 mt-3 pl-3 border-l-2 border-gray-200">
                        <div className="flex items-start gap-3 mb-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center text-blue-800 font-medium text-sm">
                                RK
                            </div>
                            <div>
                                <p className="font-medium">Rifat Khan</p>
                                <p className="text-gray-700">got any friends?</p>
                                <p className="text-gray-500 text-xs mt-1">14 min</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment Input */}
                <div className="mt-6">
                    <textarea
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder="Write a comment"
                        rows={3}
                    ></textarea>
                    <div className="flex justify-end mt-2">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium">
                            Post Comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentsTab;