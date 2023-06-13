import React from 'react';

const SearchBar = ({ value, onChange }) => {
    //Implemented search by card name.
    return (
        <input
            type="text"
            placeholder="Search by card name"
            value={value}
            onChange={onChange}
        />
    );
};

export default SearchBar;
