import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
            pages.push(i);
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            pages.push('...');
        }
    }

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-4 font-[700] font-rasa sm:text-[18px] text-[15px] text-[#000000]"
            >
                <IoIosArrowBack size={20} color='#000000' />
                Previous
            </button>

            <div className="flex items-center space-x-1">
                {pages.map((page, idx) => (
                    <button
                        key={idx}
                        disabled={page === '...'}
                        onClick={() => page !== '...' && onPageChange(page)}
                        className={`px-3 py-1 rounded-[5px] font-[700] font-rasa sm:text-[18px] text-[15px] ${page === currentPage
                            ? 'bg-[#123E41] text-white'
                            : 'bg-[#97E7EC] text-[#838383] hover:bg-[#123E41] hover:text-white'
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-4 font-[700] font-rasa sm:text-[18px] text-[12px] text-[#123E41]"
            >
                Next <IoIosArrowForward size={20} color='#123E41' />
            </button>
        </div>
    );
};

export default Pagination;
