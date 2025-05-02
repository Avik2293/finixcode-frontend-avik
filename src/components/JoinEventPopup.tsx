import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface JoinEventPopupProps {
    onClose: () => void;
}

const JoinEventPopup: React.FC<JoinEventPopupProps> = ({ onClose }) => {
    const [paymentMethod, setPaymentMethod] = useState<'bkash' | 'cash' | null>(null);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#34735F] rounded-2xl px-4 pb-4 md:px-6 w-full max-w-sm mx-auto text-white relative">
                {/* Header */}
                <div className="absolute top-8 right-8">
                    <button
                        onClick={onClose}
                        className="hover:text-gray-300 transition-colors"
                        aria-label="Close popup"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                </div>

                <div className="py-2 md:py-4 my-2 md:my-4">
                    {/* Payment Methods */}
                    <div className="flex justify-center mb-4">
                        <img
                            src="../src/assets/Vector.png"
                            alt="Payment method"
                            className="h-24 md:h-32 w-auto"
                        />
                    </div>

                    <h3 className="font-semibold text-2xl md:text-3xl mb-3 text-center">
                        Choose Payment Method
                    </h3>

                    <div className="space-y-2">
                        {/* bKash Option */}
                        <div
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'bkash' ? 'bg-[#2B2B2B] bg-opacity-30' : 'hover:bg-[#2B2B2B] hover:bg-opacity-10'}`}
                            onClick={() => setPaymentMethod('bkash')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && setPaymentMethod('bkash')}
                        >
                            <div className="flex items-start">
                                <div className={`mt-1 w-5 h-5 rounded-full border mr-3 flex-shrink-0 ${paymentMethod === 'bkash' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                                <div>
                                    <p className="font-medium flex gap-2 items-center">
                                        bKash
                                        <img
                                            src="../src/assets/arcticons_bkash.png"
                                            alt="bKash logo"
                                            className="h-6 w-auto"
                                        />
                                    </p>
                                    <p className="text-xs md:text-sm mt-1 ml-0">
                                        Send the payment now via bKash to confirm your spot instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cash Option */}
                        <div
                            className={`p-3 rounded-lg cursor-pointer transition-colors ${paymentMethod === 'cash' ? 'bg-[#2B2B2B] bg-opacity-30' : 'hover:bg-[#2B2B2B] hover:bg-opacity-10'}`}
                            onClick={() => setPaymentMethod('cash')}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === 'Enter' && setPaymentMethod('cash')}
                        >
                            <div className="flex items-start">
                                <div className={`mt-1 w-5 h-5 rounded-full border mr-3 flex-shrink-0 ${paymentMethod === 'cash' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}></div>
                                <div>
                                    <p className="font-medium flex gap-2 items-center">
                                        Cash
                                        <img
                                            src="../src/assets/hugeicons_payment-02.png"
                                            alt="Cash payment"
                                            className="h-6 w-auto"
                                        />
                                    </p>
                                    <p className="text-xs md:text-sm mt-1 ml-0">
                                        Pay the event fee directly to the host before the game starts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 md:mt-6">
                    <button
                        className={`px-6 py-2 rounded-full font-medium w-full transition-colors ${paymentMethod ? 'bg-[#2B2B2B] text-white hover:bg-[#3d3d3d]' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                        disabled={!paymentMethod}
                        onClick={onClose}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JoinEventPopup;