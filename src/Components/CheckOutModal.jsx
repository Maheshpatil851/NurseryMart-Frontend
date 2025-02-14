import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

function CheckoutModal({ totalAmount, closeModal }) {
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!address) {
            alert('Please enter an address');
        } else {
            alert(`Total amount: ${totalAmount}\nAddress: ${address}`);
            closeModal();
        }
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6 max-w-md w-full mx-4">
                    <div className="flex justify-end cursor-pointer" onClick={closeModal}>
                        <IoMdCloseCircle size={30} />
                    </div>

                    <div className="text-center mb-4">
                        <div className="text-lg font-semibold">Total Amount: ${totalAmount}</div>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address:
                                <textarea
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    rows="4"
                                />
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CheckoutModal;