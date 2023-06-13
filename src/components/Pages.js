import React, { useState } from 'react';

const Pagination = ({ totalCards, perPage, onPageChange, filteredCards }) => {
    const totalPages = Math.ceil(totalCards / perPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    //console.log(filteredCards.length);

    return (
        <div className='pagination'>
            {filteredCards.length > 9 && pageNumbers.map((i) => (
                <div key={i} className='page-number' onClick={() => onPageChange(i)}>{i}</div>
            ))}
        </div>
    );
};

export default Pagination;
