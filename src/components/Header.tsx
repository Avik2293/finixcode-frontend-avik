// import React from 'react';
// import { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import CustomDatePicker from './CustomDatePicker';
// import { GiMedal } from 'react-icons/gi';

const Header = () => {

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-[#FFFFFF] shadow">
            {/* Logo */}
            <div className="text-green-500 text-xl">
                {/* <GiMedal /> */}
                <img src={"../src/assets/Frame 1171276614.png"} alt="Logo" className="h-8 w-auto" />
            </div>

            {/* Input Group */}
            <div className="flex gap-4 items-center">
                {/* Date Picker */}
                <CustomDatePicker />

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
                <button className="flex items-center gap-2 bg-[#F4F5EF] text-[#34735F] font-medium px-4 py-2 rounded-full text-sm">
                    {/* <GiMedal className="text-green-700" /> */}
                    <img src={"../src/assets/Jithbo icon.png"} alt="Logo" className="h-8 w-auto" />
                    Leaderboard
                </button>

                <button className="border border-[#34735F] text-[#34735F] font-medium px-4 py-2 rounded-full text-sm">
                    Login / Sign up
                </button>

                <div className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-full border-[#E5E5E5">
                    <FaBars className="text-[#E5E5E5" />
                    {/* <FaUser className="text-gray-700" /> */}
                    <img src={"../src/assets/ix_user-profile-filled.png"} alt="Logo" className="h-8 w-auto" />
                </div>
            </div>
        </header>
    );
};

export default Header;
