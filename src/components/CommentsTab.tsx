import React, { } from 'react';
import {
    FaReply
} from 'react-icons/fa';

const CommentsTab: React.FC = ({ }) => {

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">


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