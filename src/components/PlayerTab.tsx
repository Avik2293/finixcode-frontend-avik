import React from 'react';
import { FaStar, FaRegStar, } from 'react-icons/fa';


const PlayerTab: React.FC = ({ }) => {

    return (
        <div className="max-w-4xl mx-auto px-4 py-6">


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