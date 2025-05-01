import { useState, useRef } from 'react';

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div className="relative flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full max-w-xs">
            {/* Input with proper spacing */}
            <div className="flex-1 pr-8">  {/* Right padding prevents overlap */}
                {/* Hidden but functional date input */}
                <input
                    type="date"
                    ref={inputRef}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => setSelectedDate(e.target.value)}
                />

                {/* Visible display */}
                <div
                    className="text-sm truncate cursor-pointer"
                    onClick={() => inputRef.current?.showPicker()}
                >
                    {selectedDate
                        ? new Date(selectedDate).toLocaleDateString()
                        : <span className="text-gray-500">Select date</span>
                    }
                </div>
            </div>

            {/* Calendar icon - positioned absolutely */}
            <div
                className="absolute right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => inputRef.current?.showPicker()}
            >
                <img
                    src="../src/assets/calendar.png"
                    alt="Calendar"
                    className="h-4 w-4"
                />
            </div>
        </div>
    );
};

export default CustomDatePicker; 