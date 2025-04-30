import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface JoinEventPopupProps {
    onClose: () => void;
}

const JoinEventPopup: React.FC<JoinEventPopupProps> = ({ onClose }) => {
    const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'cash' | null>(null);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Road to the Football</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <FaTimes />
                    </button>
                </div>

                {/* Event Info */}
                <div className="mb-4">
                    <p className="text-gray-600">Bashundhara Sports Complex</p>
                    <p className="text-gray-600">Mar 14 from 7:30 PM – 9:30 PM</p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 my-4">
                    {/* Payment Methods */}
                    <h3 className="font-semibold mb-3">Choose Payment Method</h3>

                    <div className="space-y-3">
                        {/* bKash Option */}
                        <div
                            className={`p-3 border rounded-lg cursor-pointer ${paymentMethod === 'bkash' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                            onClick={() => setPaymentMethod('bkash')}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border mr-3 flex-shrink-0 ${paymentMethod === 'bkash' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                                <div>
                                    <p className="font-medium">bKash</p>
                                    <p className="text-sm text-gray-600">Send the payment now via bKash to confirm your spot instantly.</p>
                                </div>
                            </div>
                        </div>

                        {/* Cash Option */}
                        <div
                            className={`p-3 border rounded-lg cursor-pointer ${paymentMethod === 'cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                            onClick={() => setPaymentMethod('cash')}
                        >
                            <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border mr-3 flex-shrink-0 ${paymentMethod === 'cash' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                                <div>
                                    <p className="font-medium">Cash</p>
                                    <p className="text-sm text-gray-600">Pay the event fee directly to the host before the game starts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4">
                    <div className="text-sm">
                        <p>6 spots left</p>
                        <p className="font-medium">320tk / player (pKash)</p>
                    </div>
                    <button
                        className={`px-6 py-2 rounded-lg font-medium ${paymentMethod ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                        disabled={!paymentMethod}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinEventPopup;