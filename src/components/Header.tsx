import { FaSearch, FaBars } from 'react-icons/fa';
import CustomDatePicker from './CustomDatePicker';

const Header = () => {
    return (
        <header className="flex flex-wrap items-center justify-between px-4 py-3 md:px-6 md:py-4 bg-white shadow-md">
            {/* Logo - Always visible */}
            <div className="w-auto mb-3 md:mb-0">
                <img
                    src="../src/assets/Frame 1171276614.png"
                    alt="Logo"
                    className="h-7 md:h-8 w-auto"
                />
            </div>

            {/* Search and Date Picker - Full width on mobile, auto on larger screens */}
            <div className="w-full md:w-auto order-last md:order-none mt-3 md:mt-0">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                    {/* Date Picker - Full width on mobile */}
                    <div className="w-full md:w-auto">
                        <CustomDatePicker />
                    </div>

                    {/* Search - Full width on mobile */}
                    <div className="w-full md:w-64 flex items-center bg-white shadow px-4 py-2 rounded-full border border-gray-200">
                        <input
                            type="text"
                            placeholder="Search"
                            className="outline-none text-sm placeholder-gray-500 bg-transparent w-full"
                        />
                        <button className="ml-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                            <FaSearch size={12} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Actions - Hidden on small mobile, visible otherwise */}
            <div className="hidden sm:flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
                <button className="flex items-center gap-2 bg-[#F4F5EF] text-[#34735F] font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-[#E5E7DB] transition-colors">
                    <img
                        src="../src/assets/Jithbo icon.png"
                        alt="Leaderboard icon"
                        className="h-6 md:h-8 w-auto"
                    />
                    <span className="hidden md:inline">Leaderboard</span>
                </button>

                <button className="border border-[#34735F] text-[#34735F] font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm hover:bg-[#34735F] hover:text-white transition-colors">
                    Login / Sign up
                </button>

                <button className="flex items-center gap-2 bg-white shadow px-2 py-1.5 md:px-3 md:py-2 rounded-full border border-[#E5E5E5] hover:bg-gray-50 transition-colors">
                    <FaBars className="text-gray-500 md:text-[#E5E5E5]" />
                    <img
                        src="../src/assets/ix_user-profile-filled.png"
                        alt="User profile"
                        className="h-6 md:h-8 w-auto hidden md:block"
                    />
                </button>
            </div>

            {/* Mobile menu button - Visible only on small screens */}
            <div className="sm:hidden flex items-center ml-auto">
                <button className="p-2 rounded-full bg-gray-100 text-gray-600">
                    <FaBars size={18} />
                </button>
            </div>
        </header>
    );
};

export default Header;