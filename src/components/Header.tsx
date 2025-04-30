// import React from 'react';
import { FaRegCalendarAlt, FaSearch, FaUser, FaBars } from 'react-icons/fa';
import { GiMedal } from 'react-icons/gi';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            {/* Logo */}
            <div className="text-green-500 text-2xl">
                <GiMedal />
            </div>

            {/* Input Group */}
            <div className="flex gap-4 items-center">
                {/* Date Picker */}
                <div className="flex items-center bg-white shadow px-4 py-2 rounded-full">
                    <span className="text-gray-500 text-sm mr-2">Select date</span>
                    <div className="w-8 h-8 bg-green-400 text-white rounded-full flex items-center justify-center">
                        <FaRegCalendarAlt />
                    </div>
                </div>

                {/* Search */}
                <div className="flex items-center bg-white shadow px-4 py-2 rounded-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="outline-none text-sm placeholder-gray-500 bg-transparent"
                    />
                    <div className="ml-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                        <FaSearch size={12} />
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-green-50 text-green-900 font-medium px-4 py-2 rounded-full text-sm">
                    <GiMedal className="text-green-700" />
                    Leaderboard
                </button>
                <button className="border border-green-700 text-green-700 font-medium px-4 py-2 rounded-full text-sm">
                    Login / Sign up
                </button>
                <div className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-full">
                    <FaBars className="text-gray-600" />
                    <FaUser className="text-gray-700" />
                </div>
            </div>
        </header>
    );
};

export default Header;
