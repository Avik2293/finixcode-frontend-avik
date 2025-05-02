import React from 'react';
import { FaClock, FaCalendarAlt, } from 'react-icons/fa';

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
            <div className="px-5 py-5 ">
                <h2 className="text-[18px] font-semibold mb-3">Hosted by</h2>

                <div className='bg-[#4E566B] flex justify-between text-[#FFFFFF] p-5 items-center rounded-xl'>
                    <div className="flex items-center">
                        <img src={"../src/assets/Frame 1984079473.png"} alt="Logo" className="h-16 w-auto rounded-full mr-3" />

                        <div>
                            <p className="font-medium text-[15px]">Alex Mercer</p>

                            <div className="flex flex-col text-[13px] ">
                                <span>23 <span className="text-[#F6F6F6]">activities hosted</span></span>

                                <span>4.6 <span className="text-[#F6F6F6]">host rating</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <button className=" px-4 py-1 rounded-full bg-[#FDE8CD] text-[12px] font-medium text-black">
                            Message
                        </button>

                        <button className="border border-gray-300 px-4 py-1 rounded-full text-[12px] font-medium ">
                            View profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoTab;