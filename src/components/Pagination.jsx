import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 border rounded disabled:opacity-50  dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf]"
            >
                Anterior
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => onPageChange(index + 1)}
                    className={`mx-1 px-3 py-1 border  dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] hover:bg-[#5b63bf]  bg-slate-400 rounded-xl ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="mx-1 px-3 py-1 border  dark:bg-[#2a2f6b] dark:hover:bg-[#5b63bf] hover:bg-[#5b63bf] disabled:opacity-50  bg-slate-400 rounded-xl"
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;
