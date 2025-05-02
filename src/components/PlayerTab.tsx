import React from 'react';
import { players } from '../data/players';

const PlayerTab: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto px-2 sm:px-4">
            {/* Players List Header */}
            <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Players</h2>
                <div className='flex items-center gap-1'>
                    <img
                        src="../src/assets/user-group.png"
                        alt="Players count"
                        className="h-4 sm:h-5 w-auto"
                    />
                    <span className="text-xs sm:text-sm text-[#4A4A4A]">5/11</span>
                </div>
            </div>

            {/* Players List */}
            <div className="space-y-2 sm:space-y-3">
                {players.map((player, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 border border-gray-200 rounded-xl bg-[#34735F] hover:bg-[#2a5f4d] transition-colors"
                    >
                        <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#FDE8CD] rounded-full mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center text-blue-800 font-medium text-sm sm:text-base">
                                {player.initials}
                            </div>
                            <p className="font-medium text-[#FDE8CD] text-sm sm:text-base">
                                {player.name}
                                {player.host && (
                                    <span className='text-xs font-thin ml-1'> (Host)</span>
                                )}
                            </p>
                        </div>

                        <button className="w-full sm:w-auto bg-white hover:bg-gray-100 rounded-xl px-3 py-2 sm:py-3 text-center transition-colors">
                            <span className="text-black text-xs sm:text-sm font-medium">Message</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayerTab;