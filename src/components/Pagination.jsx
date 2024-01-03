import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={index + 1 === currentPage ? "active" : ""}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
