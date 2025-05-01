// import React from 'react';
// import {
//     FaMapMarkerAlt,
//     FaClock,
//     FaCalendarAlt,
//     FaChevronRight,
//     FaUserFriends,
// } from 'react-icons/fa';

// // type TabType = 'info' | 'player' | 'comments';

// interface InfoTabProps {
//     // onTabChange: (tab: TabType) => void;
//     // onTabChange: (tab: string) => void;
//     onTabChange: (tab: 'info' | 'player' | 'comments') => void;
//     onJoinClick: () => void;
// }

// // const InfoTab = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
// const InfoTab: React.FC<InfoTabProps> = ({ onTabChange, onJoinClick }) => {
//     return (
//         <div className="max-w-4xl mx-auto px-4 py-6">
//             {/* Event Title and Basic Info */}
//             <div className="mb-6">
//                 <h1 className="text-2xl font-bold mb-2">Read to the Football Finals</h1>
//                 <p className="text-gray-600 mb-1">Beahundhara Sports Complex</p>
//                 <p className="text-gray-600 mb-4">Mar 14 from 7:30 PM – 9:30 PM</p>

//                 {/* Photo Gallery */}
//                 <div className="mb-6">
//                     <div className="flex items-center justify-between mb-2">
//                         <h2 className="text-lg font-semibold flex items-center">
//                             <FaUserFriends className="mr-2" /> +2 photos
//                         </h2>
//                         <button className="text-blue-500 text-sm">See all</button>
//                     </div>
//                     <div className="grid grid-cols-3 gap-2">
//                         <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
//                             {/* Placeholder for photo 1 */}
//                         </div>
//                         <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
//                             {/* Placeholder for photo 2 */}
//                         </div>
//                         <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center bg-blue-50">
//                             <span className="text-blue-500">+3</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Spots and Price */}
//                 <div className="flex justify-between items-center mb-6 p-4 bg-blue-50 rounded-lg">
//                     <div>
//                         <p className="font-medium">6 spots left</p>
//                         <p className="text-gray-600 text-sm">320tk /player (both)</p>
//                     </div>
//                     <button
//                         className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium"
//                         onClick={onJoinClick}
//                     >
//                         Join event
//                     </button>
//                 </div>

//                 {/* Tab Navigation */}
//                 {/* <div className="flex border-b">
//                                 <button className="px-4 py-2 font-medium text-gray-500">Info</button>
//                                 <button className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600">Player</button>
//                                 <button className="px-4 py-2 font-medium text-gray-500">Comments</button>
//                             </div> */}
//                 <div className="flex border-b">
//                     <button
//                         className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600"
//                         onClick={() => onTabChange('info')}
//                     >
//                         Info
//                     </button>
//                     <button
//                         className="px-4 py-2 font-medium text-gray-500"
//                         onClick={() => onTabChange('player')}
//                     >
//                         Player
//                     </button>
//                     <button
//                         className="px-4 py-2 font-medium text-gray-500"
//                         onClick={() => onTabChange('comments')}
//                     >
//                         Comments
//                     </button>
//                 </div>
//             </div>

//             {/* Rest of Info Tab content... */}
//             <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-3">About this event</h2>
//                 <p className="text-gray-700 mb-4">
//                     Learn about the website first between July 03 years from the listing (leaver project, mafia year area)
//                     mainstream greeting centre; fill with urban agriculture experts, leading joining farms the fragrance of gas
//                     late-fin nature and both of renowned high-tech buildings.
//                 </p>
//                 <p className="text-red-600 font-medium">Red tree</p>
//             </div>

//             {/* Location Section */}
//             <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-3 flex items-center">
//                     <FaMapMarkerAlt className="text-red-500 mr-2" />
//                     Location
//                 </h2>
//                 <p className="font-medium mb-1">NIDE Field</p>
//                 <p className="text-gray-600 mb-4">Juan Baptista Pointe de Beloja Lada Shore Drive, Chicago, Illinois</p>
//                 <button className="text-blue-500 font-medium flex items-center">
//                     Open maps <FaChevronRight className="ml-1" size={12} />
//                 </button>
//             </div>

//             {/* Event Highlights */}
//             <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-3">Highlights</h2>
//                 <ul className="space-y-2">
//                     <li className="flex items-center text-gray-700">
//                         <FaCalendarAlt className="mr-2 text-gray-500" /> Mon, 2 Dec
//                     </li>
//                     <li className="flex items-center text-gray-700">
//                         <FaClock className="mr-2 text-gray-500" /> 7:30 AM - 8:30 AM
//                     </li>
//                     <li className="text-gray-700">Arrive 15 min before start</li>
//                     <li className="text-gray-700">Venus booked</li>
//                 </ul>
//             </div>

//             {/* Refund Policy */}
//             <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-3">Refund & cancellation policy</h2>
//                 <ul className="list-disc pl-5 space-y-1 text-gray-700">
//                     <li>Full refund if heat cancels the game</li>
//                     <li>Full refund if you cancel 24+ hours in advance</li>
//                     <li>Full refund if game is cancelled due to low attendance</li>
//                 </ul>
//                 <button className="text-blue-500 font-medium mt-2">Learn more</button>
//             </div>

//             {/* Host Information */}
//             <div className="mb-8">
//                 <h2 className="text-xl font-semibold mb-3">Hosted by</h2>
//                 <div className="flex items-center">
//                     <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
//                     <div>
//                         <p className="font-medium">Alex Mercer</p>
//                         <p className="text-gray-600 text-sm">23 activities hosted • 4.6 hour rating</p>
//                     </div>
//                 </div>
//                 <div className="flex gap-2 mt-4">
//                     <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium">Message</button>
//                     <button className="border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium">View profile</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default InfoTab;


import React from 'react';
import { FaClock, FaCalendarAlt, FaStar, } from 'react-icons/fa';

// interface InfoTabProps {
// onTabChange: (tab: 'info' | 'player' | 'comments') => void;
// onJoinClick: () => void;
// }

// const InfoTab: React.FC<InfoTabProps> = ({ onTabChange }) => {
const InfoTab: React.FC = ({ }) => {

    return (
        <div className=" ">
            {/* Event Tags */}
            <div className="px-5 py-3 border-t border-gray-200">
                <div className="flex justify-between ">
                    <span className='flex gap-2 items-center'>
                        <span className="bg-[#E6F8F8] px-2.5 py-1 rounded-full text-xs text-[#4A4A4A]">Football</span>
                        <span className="bg-[#E6F8F8] px-2.5 py-1 rounded-full text-xs text-[#4A4A4A]">Relay</span>
                        <span className="bg-[#FFE8F0] px-2.5 py-1 rounded-full text-xs text-[#4A4A4A]">Female</span>
                        <span className="bg-[#EFEDFF] px-2.5 py-1 rounded-full text-xs text-[#4A4A4A]">Age: Below 25</span>
                    </span>

                    <span className='flex items-center gap-0'>
                        <img src={"../src/assets/Difficulty Icons.png"} alt="Logo" className="h-8 w-auto" />
                        <span className=" px-2.5 py-1 text-xs text-[#4A4A4A]">Beginner</span>
                    </span>
                </div>
            </div>

            <hr className='border-t border-gray-300' />

            {/* About Section */}
            <div className="px-5 py-5">
                <h2 className="text-[18px] font-semibold mb-3">About this event</h2>
                <p className="text-gray-700 text-[15px] mb-4 leading-relaxed">
                    Learn about the capital’s first beavers in 400 years from the Ealing Beaver project, make your own
                    mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get
                    into the nuts and bolts of tomorrow’s high-rise buildings.
                </p>
                <p className="text-[#0096ED] font-medium text-[15px] underline">Read more</p>
            </div>

            <hr className='border-t border-gray-300' />

            {/* Location Section */}
            <div className="px-5 py-5 ">
                <h2 className="text-[18px] font-semibold mb-3">Location</h2>

                <div className='flex justify-between gap-4 items-center' >
                    <div className='max-w-[50%]'>
                        <p className="font-medium text-[15px] mb-1">NDE Field</p>
                        <p className="text-gray-600 text-[15px] mb-3">Juan Baptista Pointe de Beloja Lada Shore Drive, Chicago, Illinois</p>
                    </div>

                    <div className="border border-gray-300 rounded-full px-3 py-1 flex items-center h-10">
                        <button className="font-medium text-[14px]">
                            Open maps
                        </button>
                    </div>
                </div>
            </div>

            <hr className='border-t border-gray-300' />

            <div className="px-5 py-5 min-w-[90%]">
                <h2 className="text-[24px] font-semibold mb-3">Good to know</h2>

                <div className="text-white flex gap-4">
                    {/* Highlights Section */}
                    <div className="bg-[#DA6049] rounded-lg p-4">
                        <h2 className="text-[18px] font-semibold mb-3">Highlights</h2>

                        <ul className="space-y-2 text-[15px]">
                            <li className="flex items-center ">
                                <FaCalendarAlt className="mr-3" /> Mon, 2 Dec
                            </li>

                            <li className="flex items-center ">
                                <FaClock className="mr-3" /> 7:30 AM - 8:30 AM
                            </li>

                            <li className="flex items-center">
                                <FaClock className="mr-3" /> Arrive 15 min before start
                            </li>

                            <li className="flex items-center">
                                <img
                                    src="../src/assets/tabler_soccer-field.png"
                                    alt="Calendar"
                                    className="h-4 w-4 mr-2"
                                />
                                Venus booked
                            </li>
                        </ul>
                    </div>

                    {/* Refund Policy */}
                    <div className="bg-[#34735F] rounded-lg p-4">
                        <h2 className="text-[18px] font-semibold mb-3">Refund & cancellation policy</h2>

                        <ul className="list-disc pl-5 space-y-1 t text-[15px]">
                            <li>Full refund if heat cancels the game</li>
                            <li>Full refund if you cancel 24+ hours in advance</li>
                            <li>Full refund if game is cancelled due to low attendance</li>
                        </ul>

                        <button className=" font-medium mt-2 text-[13px] flex justify-self-end">Learn more</button>
                    </div>
                </div>
            </div>

            <hr className='border-t border-gray-300' />

            {/* Host Section */}
            <div className="px-5 py-5 border-t border-gray-200">
                <h2 className="text-[18px] font-semibold mb-3">Hosted by</h2>
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                    <div>
                        <p className="font-medium text-[15px]">Alex Mercer</p>
                        <div className="flex items-center text-gray-600 text-[13px]">
                            <span>23 activities hosted</span>
                            <span className="mx-1">•</span>
                            <FaStar className="text-yellow-400 mr-1" size={12} />
                            <span>4.6</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] font-medium flex-1">
                        Message
                    </button>
                    <button className="border border-gray-300 px-4 py-2 rounded-lg text-[14px] font-medium flex-1">
                        View profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoTab;